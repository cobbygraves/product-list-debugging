## BUGS DOCUMENTATION

**BUG INSIDE ADD TO CART COMPONENT**
The component decorator inside the Add-To-Cart component has semi-colon at the end, which needs to be removed to resolve the bug.

**ADD TO CART NOT IMPORTED BUG**
The Add-To-Cart Component is NOT imported and added to the imported array of the App Component before it was used inside the App Component.

**STATICALLY GENERATED DESSERT ITEM**
The structure of the dessert card html is statically rendered inside the app component html template, instead of it being dynamically rendered using a @for or \*ngFor derective.
