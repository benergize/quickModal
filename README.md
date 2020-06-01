# quickModal
A simple function to create simple, customizable, dependecy free modals.

## Usage
Call the function with ``quickModal(String message)``. Message can contain HTML, or be an HTML element.

## Examples

### Simple modal with just text
```
  quickModal("This text will appear inside the modal.");
```

### Modal with additional arguments
```
  quickModal("This modal will render with an X, will animate, and will show an alert when it gets closed.", true, true, function() { alert("You closed me!"); }); 
```

### Modal with object for some arguments
```
  quickModal({
    "message": "This modal will show an alert when closed.",
    "closeAction": function() { alert('And true to form...'); }
  });
```

### Modal using an HTML element as the message
```
  var element = document.createElement("div");
  element.innerHTML = "You can also use HTML elements as the message parameter.";
  quickModal(element);
```

## Upcoming features
1. ~Open without the X mark~
2. ~Close by clicking outside of modal area~
3. Support for Oculus Rift
