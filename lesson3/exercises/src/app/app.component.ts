import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = true;

  handleTakeOff(rocketImage) {
    let result = window.confirm("Are you sure the shuttle is ready for takeoff?");

    if (result) {
      this.color = "blue";
      this.height = 100000;
      this.width = 0;
      this.message = "Shuttle in flight.";
      rocketImage.style.bottom = "100px"
      this.takeOffEnabled = false;
    }
  }

  handleLanding(rocketImage) {
    window.alert("The shuttle is landing. Landing gear engaged.");
    
    this.color = "green";
    this.height = 0;
    this.width = 0;
    this.message = "The shuttle is landing.";
    rocketImage.style.bottom = "0px";
    this.takeOffEnabled = true;
  }

  handleAbort(rocketImage) {
    let result = window.confirm("Are you sure you really want to abort the mission?");

    if (result) {
      this.color = "red";
      this.height = 0;
      this.width = 0;
      this.message = "Mission aborted.";
      rocketImage.style.bottom = "0px";
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage, direction) {
    
    if (direction === 'right') {
      if (this.width < 380000) {
        let movement = parseInt(rocketImage.style.left) + 10 + 'px';
        console.log(movement);
        rocketImage.style.left = movement;
        this.width = this.width + 10000;
      }
    } else if (direction === 'left') {
      if (this.width > -20000) {
        let movement = parseInt(rocketImage.style.left) - 10 + 'px';
        rocketImage.style.left = movement;
        this.width = this.width - 10000;
      }
    } else if (direction === 'up') {
      if (this.height < 330000) {
        let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
        rocketImage.style.bottom = movement;
        this.height += 10000;
      }
    } else if (direction === 'down') {
      if (this.height !== 0) {
        let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
        rocketImage.style.bottom = movement;
        this.height -= 10000;
      }
      
    }

    this.warning();
  }

  warning() {
    if (this.width > 370000 || this.width < 0 || this.height > 310000 || this.height === 0) {
      this.color = "orange";
    } else {
      this.color = "blue";
    }
  }
}

