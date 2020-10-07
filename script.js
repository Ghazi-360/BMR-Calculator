calculate = () => {
    const age = document.forms["myForm"]["age"].value;
    const gender = document.forms["myForm"]["gender"].value;
    const heightfoot = document.forms["myForm"]["heightFt"].value;
    const heightinches = document.forms["myForm"]["heightIn"].value;
    let height = (heightfoot * 30.48) + (heightinches * 2.54);
    const weightlbs = document.forms["myForm"]["weight"].value;
    let weight = weightlbs * 0.45359237;
    let bmr = 0;
    let activity = "";
    if (age == '' || gender == '' || height == '' || weight == '') {
      alert("All fields are required");
      return false;
    }

    if (gender == 1) {
      bmr = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
    } else {
      bmr = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
    }

    if (bmr <= 1926) {
      activity = "Sedentary: little or no exercise";
    } else if ( bmr > 1926 && bmr<= 2207 ) {
      activity = "Exercise 1-3 times/week";
    } else if ( bmr > 2207 && bmr<= 2351 ) {
      activity = "Exercise 4-5 times/week";
    } else if ( bmr > 2351 && bmr<= 2488 ) {
      activity = "Daily exercise or intense exercise 3-4 times/week ";
    } else if ( bmr > 2488 && bmr<= 2796 ) {
      activity = "Intense exercise 6-7 times/week ";
    } else {
      activity = "Very intense exercise daily, or physical job";
    }

    document.getElementById("result").innerHTML = 'Your BMR: ' + bmr.toFixed(2) + 'kCal/Day ' + activity;
    document.getElementById("result").style.display = "block";

    return false;

  }