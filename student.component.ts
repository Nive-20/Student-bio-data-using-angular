import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  student = {
    name: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    address: ''
  };

  students: any[] = [];

  editIndex: number | null = null;

  constructor() {

    const data = localStorage.getItem('students');

    if (data) {
      this.students = JSON.parse(data);
    }
  }

  saveStudent() {

    if (this.editIndex === null) {
      this.students.push({ ...this.student });
    } else {
      this.students[this.editIndex] = { ...this.student };
      this.editIndex = null;
    }

    localStorage.setItem('students', JSON.stringify(this.students));

    this.resetForm();
  }

  editStudent(index: number) {

    this.student = { ...this.students[index] };

    this.editIndex = index;
  }

  deleteStudent(index: number) {

    this.students.splice(index, 1);

    localStorage.setItem('students', JSON.stringify(this.students));
  }

  resetForm() {

    this.student = {
      name: '',
      age: '',
      gender: '',
      email: '',
      phone: '',
      address: ''
    };
  }
}