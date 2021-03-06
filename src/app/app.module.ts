import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskItemComponent } from './task-item/task-item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, ButtonComponent, TasksComponent, TaskItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
