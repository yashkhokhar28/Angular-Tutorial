# Angular Form Example

This project demonstrates how to create a simple form in Angular using components and Bootstrap styling.

## Instructions

1. Create a separate component using the Angular CLI:

   ```
   ng g c form
   ```

2. Add a form route in `app-routing.module.ts` and link it in `app.component.html`:
   In `app-routing.module.ts`:

   ```typescript
   { path: "form", component: FormComponent }
   ```

   In `app.component.html`:

3. In `form.component.ts`, create a static array:

   ```typescript
   faculty = [
     { name: "arjun", age: 34 },
     { name: "yash", age: 20 },
     { name: "himanshu", age: 20 },
   ];
   ```

4. Display the array using Bootstrap in `form.component.html`:

   ```html
   <table class="table m-5">
     <thead>
       <tr>
         <th scope="col">name</th>
         <th scope="col">age</th>
         <th scope="col">edit</th>
         <th scope="col">delete</th>
       </tr>
     </thead>
     <tbody>
       <tr *ngFor="let fac of faculty">
         <th>{{fac.name}}</th>
         <td>{{fac.age}}</td>
         <td><button>Edit</button></td>
         <td><button>Delete</button></td>
       </tr>
     </tbody>
   </table>
   ```

5. Design the form using Bootstrap with two fields and a submit button in `form.component.html`:

   ```html
   <form>
     <div class="mb-3">
       <label for="exampleInputEmail1" class="form-label">Name</label>
       <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
     </div>
     <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Age</label>
       <input type="text" class="form-control" id="exampleInputPassword1" />
     </div>
     <button type="submit" class="btn btn-primary me-5">Add</button>
     <button type="submit" class="btn btn-primary">Edit</button>
   </form>
   ```

6. Create a field for the Faculty schema in `form.component.ts` file:

   ```
   FacultyName = '';
   FacultyAge = 0;
   ```

7. Add the `FormsModule` to the `imports` array in `app.module.ts` and Use NgModel in Form's TextField For Data Binding:

   ```typescript
   imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule];
   ```

   ```typescript
   <input type="text" name="FacultyName" [(ngModel)]="FacultyName" class="form-control"
                    id="exampleInputEmail1" aria-describedby="emailHelp">
    <input type="text" name="FacultyAge" [(ngModel)]="FacultyAge" class="form-control"
                    id="exampleInputPassword1">
   ```

8. Define the submit event in form :

   ```typescript
   <form (ngSubmit)="submit()">
   ```

9. In `form.component.ts`, add a `submit()` function

   ```typescript
   submit() {
    this.faculty.push({ name: this.FacultyName, age: this.FacultyAge });
    this.FacultyName = '';
    this.FacultyAge = 0;
   }
   ```

10. To delete a record, we need the index. Obtain it from the form by iterating over the faculties array:

    ```html
    <tr *ngFor="let fac of faculties; let i = index"></tr>
    ```

11. Create a `delete()` function in `form.component.ts`:

    ```typescript
    delete(id: number) {
        this.faculties.splice(id, 1);
    }
    ```

12. For editing, we'll complete it in two steps: - Step 1: Fill the current value. Add a function call on the edit button:
    
    `html
    ```
      <td><button class="btn btn-success" (click)="setValue(i)">Edit</button></td>
    ```
    
    - Create a `setValue()` function in `form.component.ts`:
    `typescript`
    ```
    setValue(id: any) {
    this.idToEdit = id;
    this.FacultyName = this.faculty[id].name
    this.FacultyAge = this.faculty[id].age
    }
    ```

14. **Flag for Adding or Editing:**

    - We need to know whether we are adding or editing a record. For this, we'll use a flag variable in `form.component.ts`:
      ```typescript
      idToEdit: number = -1;
      ```
    - Update this flag in the `setValue()` function, and based on it, we'll update the button:
      ```html
      <button type="submit" *ngIf="idToEdit===-1" class="btn btn-primary me-5">Add</button> <button type="submit" *ngIf="idToEdit!==-1" class="btn btn-primary">Edit</button>
      ```

15. **Submit Function Update:**
    - In the `submit()` function, we'll make the following changes:
      - If `idToEdit` is -1, we'll add a new record to the `faculty` array.
      - Otherwise, we'll update the existing record at the specified index.
      - Finally, we'll reset the form fields:
        ```typescript
          submit() {
          if (this.idToEdit === -1) {
            this.faculty.push({ name: this.FacultyName, age: this.FacultyAge });
          } else {
            this.faculty[this.idToEdit] = { name: this.FacultyName, age: this.FacultyAge };
          }
          this.FacultyName = '';
          this.FacultyAge = 0;
        }
        ```
