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
const events = {

}
const today = dayjs();
$currentDay.text(`Today is ${today.format("dddd, D MMMM h:mm A")}`)
for (var i = 0; i < timeBlocks.length; i++) {
    // Create a new `<div>` for each ability and its text content
    const $timeBlock = $(`
    <div class="time-block row">
    <h4 class="hour col">${timeBlocks[i]}</h4>
        <form class="col-6 description">
            <label for="timeBlock${i}">Event: </label>
            <input type="text" name="timeBlock${i}" id="event"/>
        </form>
        <button class="saveBtn col" id="submit"><i>Save</i></button>
    </div>
    `);
    $dayPlanner.append($timeBlock);
    if (today.format("H") > i + 9) {
        $timeBlock.addClass("past")
    } else if (today.format("H") == i + 9) {
        $timeBlock.addClass("present")
    } else {
        $timeBlock.addClass("future")
    }
};
$(".saveBtn").on("click", function () {
    let event = $("#event").val;

    localStorage.setItem("events", );
})

