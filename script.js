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
]
for (var i = 0; i < timeBlocks.length; i++) {
    // Create a new `<div>` for each ability and its text content
    const $timeBlock = $(`
    <li class="time-block">
    ${timeBlocks[i]}
        <form>
            <label for="timeBlock${i}">
                Event: 
            </label>
            <input type="text" name="timeBlock${i}"/>
            <button class="saveBtn" id="submit"/>
        </form>
    </li>
    `);
    $dayPlanner.append($timeBlock);
  };