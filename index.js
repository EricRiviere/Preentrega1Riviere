let command;

//General function
function cart() {
  alert(
    "Enter the products you want to add to your caart: \n\n- Add the name of the product EXACTLY as displayed in the web.\n - Once you have added all the products you want to buy, enter 'TOTAL' to know the total ammount of your purchase."
  );

  let list = "";
  let total = 0;
  //Cycle to add products until "TOTAL" command indicates to calculate the cart total amount
  while (command != "TOTAL") {
    command = prompt(
      "Enter a product to your cart\n- Or enter TOTAL to know the total ammount"
    );

    //Switch with all product cases to be introduced
    //Every case includes an addition to cart list, an alert to confirm the product has been added and the price addition to total amount
    switch (command) {
      case "MAAP x 100% Hypercraft":
        list += "-" + command + " (305 $AUD)\n";
        alert(command + " added to cart");
        total += 305;
        break;
      case "Pro Race Mitt":
        list += "-" + command + " (115 $AUD)\n";
        alert(command + " added to cart");
        total += 115;
        break;
      case "Leg Warmers":
        list += "-" + command + " (95 $AUD)\n";
        alert(command + " added to cart");
        total += 95;
        break;
      case "Knee Warmers":
        list += "-" + command + " (80 $AUD)\n";
        alert(command + " added to cart");
        total += 80;
        break;
      case "Arm Warmers":
        list += "-" + command + " (75 $AUD)\n";
        alert(command + " added to cart");
        total += 75;
        break;
      case "Evade Bottle":
        list += "-" + command + " (30 $AUD)\n";
        alert(command + " added to cart");
        total += 30;
        break;
      case "ADL 2023 Sock":
        list += "-" + command + " (35 $AUD)\n";
        alert(command + " added to cart");
        total += 35;
        break;
      case "Emerge Pro Air Sock":
        list += "-" + command + " (30 $AUD)\n";
        alert(command + " added to cart");
        total += 30;
        break;
      case "Evade Pro Base LS Jersey 2.0":
        list += "-" + command + " (275 $AUD)\n";
        alert(command + " added to cart");
        total += 275;
        break;
      case "Evade Pro Base Jersey 2.0":
        list += "-" + command + " (245 $AUD)\n";
        alert(command + " added to cart");
        total += 245;
        break;
      case "Evolve 3D Pro Air Jersey":
        list += "-" + command + " (225 $AUD)\n";
        alert(command + " added to cart");
        total += 225;
        break;
      case "Training Bib 3.0":
        list += "-" + command + " (295 $AUD)\n";
        alert(command + " added to cart");
        total += 295;
        break;
      case "Elipse Team Bib Evo":
        list += "-" + command + " (375 $AUD)\n";
        alert(command + " added to cart");
        total += 375;
        break;
      case "Women's Evade Pro Base":
        list += "-" + command + " (245 $AUD)\n";
        alert(command + " added to cart");
        total += 245;
        break;
      case "Women's Evolve 3D Pro Air":
        list += "-" + command + " (225 $AUD)\n";
        alert(command + " added to cart");
        total += 225;
        break;
      case "Women's Team Bib Evo":
        list += "-" + command + " (355 $AUD)\n";
        alert(command + " added to cart");
        total += 355;
        break;
      case "Women's Training Bib 3.0":
        list += "-" + command + " (295 $AUD)\n";
        alert(command + " added to cart");
        total += 295;
        break;
      case "Women's Alt_Road Cargo":
        list += "-" + command + " (415 $AUD)\n";
        alert(command + " added to cart");
        total += 415;
        break;
      case "Team Bib Evo":
        list += "-" + command + " (355 $AUD)\n";
        alert(command + " added to cart");
        total += 355;
        break;
      //The case TOTAL first
      case "TOTAL":
        alert(
          "These are the products on your cart:\n\n" +
            list +
            "\nProcessing the total ammount..."
        );
        break;
      default:
        alert(
          "The product " +
            '"' +
            command +
            '"' +
            " doesn't exist. Enter the product name EXACTLY as displayed in the web (including capital letters and spaces between words)"
        );
    }
  }

  if (command == "TOTAL") {
    alert(
      "Products on your cart:\n\n" +
        list +
        "\n" +
        "The total ammount of your order is " +
        total +
        " $AUD"
    );
  }

  let discount = prompt("Add a discount cupon if you have one:");

  if (discount === "SPECIAL20MAAP" && total >= 250) {
    let discountAmount = (total * 20) / 100;
    totalDiscount = total - discountAmount;
    confirm(
      "Products on your cart:\n" +
        list +
        "\n" +
        "Previous price: " +
        total +
        " $AUD" +
        "\n  (20% discount: - " +
        discountAmount +
        " $AUD)" +
        "\nPrice with discount: " +
        totalDiscount +
        " $AUD"
    );
  } else if (discount === "SPECIAL20MAAP" && total < 250) {
    alert(
      "The total ammount is not enough to apply discount (min 250$AUD)\n\n" +
        "Products on your cart:\n" +
        list +
        "\n" +
        "Total amout: " +
        total +
        " $AUD"
    );
  } else {
    alert(
      "The discount cupon " +
        '"' +
        discount +
        '"' +
        " doesn't exist. \n\n" +
        "Products on your cart:\n" +
        list +
        "\n" +
        "(The total amount of your order is still " +
        total +
        " $AUD)"
    );
  }
}
