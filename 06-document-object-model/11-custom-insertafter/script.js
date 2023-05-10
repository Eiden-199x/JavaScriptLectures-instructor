// function insertAfter(newEl, existingEl) {
//   existingEl.parentNode.insertBefore(newEl, existingEl.nextSibling);
// }

function insertAfter(newEl, existingEl) {
  // Get the parent node of the existing element
  const parent = existingEl.parentNode;

  // Get the next sibling of the existing element
  const nextSibling = existingEl.nextSibling;

  // If the next sibling is null, use appendChild to add the new element to the end
  if (nextSibling === null) {
    parent.appendChild(newEl);
  } else {
    // Otherwise, use insertBefore to insert the new element before the next sibling
    parent.insertBefore(newEl, nextSibling);
  }
}

//function insertAfter() {
//FOO
//}

// New element to insert
const li = document.createElement("li");
li.textContent = "Insert Me After!";

// Existing element to insert after
const firstItem = document.querySelector("li:first-child");

// Our custom function
insertAfter(li, firstItem);
