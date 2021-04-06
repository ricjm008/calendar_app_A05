const $dayPlanner = $(".container");
const $currentDay = $("#currentDay");
const timeBlocks = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM"
];
const $event1 = $("#event0");
const $event2 = $("#event1");
const $event3 = $("#event2");
const $event4 = $("#event3");
const $event5 = $("#event4");
const $event6 = $("#event5");
const $event7 = $("#event6");
const $event8 = $("#event7");
let events = {
    0: $event1.value,
    1: $event2.value,
    2: $event3.value,
    3: $event4.value,
    4: $event5.value,
    5: $event6.value,
    6: $event7.value,
    7: $event8.value
};
const today = dayjs();
$currentDay.text(`Today is ${today.format("dddd, D MMMM h:mm A")}`)
// This for loop creates the 8 time blocks
for (var i = 0; i < timeBlocks.length; i++) {
    // Uses jQuery to create the html
    const $timeBlock = $(`
    <div class="time-block row">
        <h4 class="hour col-1">${timeBlocks[i]}</h4>
        <form class="col-10 description">
            <label class="description" for="timeBlock${i}">Event: </label>
            <input type="text" class="description" id="event${i}" name="timeBlock${i}"/>
        </form>
        <div id="eventsLogged${i}"></div>
        <button class="saveBtn col-1" id="submit"><i>Save</i></button>
    </div>
    `);
    
    // Defines the relative state of each block
    $dayPlanner.append($timeBlock);
    if (today.format("H") > i + 9) {
        $timeBlock.addClass("past")
    } else if (today.format("H") == i + 9) {
        $timeBlock.addClass("present")
    } else if (today.format("H") < i + 9) {
        $timeBlock.addClass("future")
    }
    
};
// To save new events in each time block
$(".saveBtn").on("click", function () {

    localStorage.setItem("events", JSON.stringify(events));
});

// Passes in the events in local storage
    events = JSON.parse(localStorage.getItem("events"));
    const $eventsLogged = $(`#eventsLogged${i}`);
    if (events == !null) {
        $eventsLogged = events;
    }