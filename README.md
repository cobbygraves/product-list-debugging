# Product List with Cart

This project is an Angular application that displays a list of products (desserts) and allows users to add them to a shopping cart.

## Project Setup

1.  **Clone the repository:**

    git clone <repository-url>
    cd product-list-with-cart

2.  **Install dependencies:**

    npm install

3.  **Start the development server:**

    npm start

## Services Documentation

This section describes the purpose and functions within the services used in this project.

### `DessertService` (`src/app/services/dessert.service.ts`)

This service is responsible for fetching the list of desserts from a data source and providing it to the components.

- **`constructor()`**

  - The constructor injects the `HttpClient` service, which is used to make HTTP requests.
  - Inside the constructor, it fetches the dessert data from `dataURL` using `http.get()`.
  - The fetched data is then pushed to the `dessertsSubject` using `this.dessertsSubject.next(data);`, which notifies all subscribers of the new data.

- **`getDesserts()`**

  - Returns the `desserts$` Observable, allowing components to subscribe to dessert updates.

### `CartService` (`src/app/services/cart.service.ts`)

This service manages the shopping cart functionality, including adding, removing, and retrieving cart items.

- **`getCartItems()`**

  - Returns the `cartItems$` Observable, allowing components to subscribe to cart updates.

- **`addToCart()`**

  - Adds a `CartItem` to the cart.
  - It first retrieves the current cart items from `this.cartItemsSubject.value`.
  - It then checks if the item already exists in the cart. If it does, it updates the quantity. Otherwise, it adds the new item to the cart.
  - Finally, it pushes the updated cart items to `this.cartItemsSubject` using `this.cartItemsSubject.next([...items]);`, notifying all subscribers of the change.

- **`removeFromCart()`**

  - Removes a `CartItem` from the cart based on the item's name.
  - It filters the current cart items to exclude the item with the specified name.
  - The updated cart items are then pushed to `this.cartItemsSubject`.

- **`clearCart()`**

  - Clears all items from the cart.
  - It pushes an empty array to `this.cartItemsSubject`, effectively emptying the cart.
