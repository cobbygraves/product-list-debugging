## BUGS DOCUMENTATION

**BUG INSIDE ADD TO CART COMPONENT**
The component decorator inside the Add-To-Cart component has semi-colon at the end, which needs to be removed to resolve the bug. This is because, anything that comes inbetween the decorator and the Component.ts class will throw an error.

**ADD TO CART NOT IMPORTED BUG**
The Add-To-Cart Component is NOT imported and added to the imported array of the App Component before it was used inside the App Component. It can be resolved by importing the Add-To-Cart Component in the App Component and adding it to the import array of the App Component.

**STATICALLY GENERATED DESSERT ITEM**
The structure of the dessert card html is statically rendered inside the app component html template, instead of it being dynamically rendered using a @for or \*ngFor derective.

**UNUSED TITLE PROPERTY BUG**
The property name title in the App Component is unused inside the App Component

**CONFIRM MODAL CONTENT SCREEN OVERFLOW BUG**
When more than 8 items are added to cart, the confirm modal overflows the screen height, making it impossible for the user to see the rest of the items in the cart. Just by changing the overflow-y to scroll and giving the modal a specific height eg. 50vh will resolve the issue.
