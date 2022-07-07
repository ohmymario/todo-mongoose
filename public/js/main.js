// ITEM EVENTLISTENER

// Give eventlisteners to only the wrappers
// Check classnames to figure out what function to run
document.querySelector(".wrapper").addEventListener("click", (e) => {
  const { classList } = e.target;

  if (classList.contains(`item-info`)) {
    let isCompleted = classList.contains(`completed`);
    let ID = e.target.parentElement.getAttribute("data-id");

    // if complete   -> mark incomplete on click
    // if incomplete -> mark complete on click
    if (isCompleted) {
      markIncomplete(ID);
    } else {
      markComplete(ID);
    }
  }
  if (classList.contains(`remove`)) {
    dbRemoveItem(e);
  }
});

// DELETE ITEM METHOD
async function dbRemoveItem(e) {
  let foundID = e.target.parentElement.getAttribute("data-id");
  let body = {
    ID: foundID,
  };

  try {
    const res = await fetch("todos/deleteTodo", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(data);
    location.reload();
  } catch (error) {
    console.error(error);
  }
}

// INCOMPLETE METHOD
async function markIncomplete(ID) {
  // Using ID to find corresponding DB entry
  let body = { ID };

  try {
    // call fetch on the markIncomplete PUT method
    const res = await fetch("todos/markIncomplete", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    // turn the response into JSON
    const data = await res.json();
    console.log(data);
    location.reload();
  } catch (error) {
    console.error(error);
  }
}

// COMPLETE METHOD
async function markComplete(ID) {
  // Using ID to find corresponding DB entry
  let body = { ID };

  try {
    // call fetch on the markIncomplete PUT method
    const res = await fetch("todos/markComplete", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    // turn the response into JSON
    const data = await res.json();
    console.log(data);
    location.reload();
  } catch (error) {
    console.error(error);
  }
}
