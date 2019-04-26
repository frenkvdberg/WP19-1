function changeTitle(word, newTitle) {
    /* If the URL contains the word given as the first argument,
    the title will be changed according to title given in the second argument.
    */
    if (document.URL.includes(word)) {
        document.title = newTitle;
    }
}

function elementWithText(newTagName, text, position) {
    // Creates a new tag and also fills it with a given text.
    let newEl = document.createElement(newTagName);
    let newElText = document.createTextNode(text);
    newEl.appendChild(newElText);
    position.appendChild(newEl);
}


function classItemsColorChanger (className, newColor) {
    // Changes all the items of a class to the specified color.
    let itemAmount = document.querySelectorAll(className).length;
    for (let i = 0; i < itemAmount; i++ ) {
        let navItem = document.querySelectorAll(className)[i].firstChild.nextSibling;
        navItem.style.color = newColor;
    }
}

function main () {
    let position;
    let liElements;
    let mainColumn;
    let newDivEl;
    let rowDiv;
    let containerDiv;
    let thirdFooterLiItem;
    let weeklySchedule;
    let scheduleArticle;
    let scheduleHeader;
    let schedulePar;
    let scheduleHeaderText;


    // 1. Change the titles of the webpages
    changeTitle("index", "Webprogramming (LIX019P05) - Index");
    changeTitle("second", "Webprogramming (LIX019P05) - Second");

    // 2. Add a new <article> to the main column of index, containing a heading and paragraph
    if (document.URL.includes("index")) {
        position = document.getElementsByClassName("col-md-12")[0];
        elementWithText("article","", position);
        position = document.getElementsByTagName("article")[1];
        elementWithText("h1", "Here is a new heading", position);
        elementWithText("p", "This is the added paragraph.", position);
    }

    // 3. Change the href attribute of the third <li> element in the footer.
    liElements = document.getElementsByTagName("li");
    thirdFooterLiItem = liElements[6];
    thirdFooterLiItem.firstChild.setAttribute("href", "https://google.com");

    // 4. Add an attribute to the <li> element that forces the link to open in a new window or tab
    thirdFooterLiItem.firstChild.setAttribute("target", "_blank");

    // 5. Change the color of all elements with the class nav-item to red
    classItemsColorChanger(".nav-item", "red");


    // 6. Create a Javascript object and fill it with the data from the PHP array that can
    // be seen in wp19-check.php
    weeklySchedule = {
        Week1: "Assignment 1",
        Week2: "No lecture",
        Week3: "Assignment 2",
        Week4: "-",
        Week5: "Assignment 3",
        Week6: "-",
        Week7: "Guest Lecture"
    };

    scheduleArticle = document.createElement("article");
    scheduleHeader = document.createElement("h1");
    schedulePar = document.createElement("p");
    scheduleHeaderText = document.createTextNode("Weekly Schedule:");
    scheduleHeader.appendChild(scheduleHeaderText);
    scheduleArticle.appendChild(scheduleHeader);
    for (item in weeklySchedule) {
        let weekContent = document.createTextNode(item + ": " + weeklySchedule[item]);
        let lineBreak = document.createElement("br");
        schedulePar.appendChild(weekContent);
        schedulePar.appendChild(lineBreak);
    }
    scheduleArticle.appendChild(schedulePar);
    document.getElementsByClassName("row")[0].childNodes[1].appendChild(scheduleArticle);


    // 7. Add a sidebar to second.html
    if (document.URL.includes("second")) {
        // First adding a new row to put the columns in
        rowDiv = document.createElement("div");
        containerDiv = document.getElementsByClassName("container")[0];
        rowDiv.setAttribute("class", "row");
        containerDiv.insertBefore(rowDiv, containerDiv.childNodes[0]);

        // 7a: Changing the class
        mainColumn = document.getElementsByClassName("col-md-12")[0];
        mainColumn.setAttribute("class", "col-md-8");

        // 7b: Add new div element with size col-md-4
        position = document.getElementsByClassName("container")[0];
        elementWithText("div","", position);
        newDivEl = position.lastChild;
        newDivEl.setAttribute("class", "col-md-4");

        // 7c: Adding the Sidebar
        elementWithText("article", "", newDivEl);
        position = document.getElementsByTagName("article")[2];
        elementWithText("h1","Sidebar", position);
        rowDiv.appendChild(mainColumn);
        rowDiv.appendChild(newDivEl);
    }
}

window.addEventListener('load', main);