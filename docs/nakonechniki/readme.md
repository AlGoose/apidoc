# Наконечники

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies consequat magna a tincidunt. Nunc dignissim vel massa ut faucibus. Mauris porttitor ornare nisl, eget tincidunt enim. Suspendisse venenatis lacinia lobortis. Mauris faucibus mollis ex, sed dictum lacus semper ac. In tristique, nunc at rhoncus egestas, purus dolor porta ante, in rhoncus odio augue at dui. Sed pretium metus purus, et accumsan sapien faucibus at. Aliquam vulputate euismod magna consequat interdum.

* **URL**

`/name` 

* **Method**

`GET` 

* **URL Params**

  **Required:**

  | Parameter | Type   | Description |
  |-----------|--------|-------------|
  | param1    | string | Description |
  | param1    | string | Description |
  | param1    | string | Description |
  | param1    | string | Description |

  **Optional:**

  | Parameter | Type   | Description |
  |-----------|--------|-------------|
  | param1    | string | Description |
  | param1    | string | Description |
  | param1    | string | Description |
  | param1    | string | Description |

* **Success Response**
  * **Code:** 200

    **Content:**

     ```json
     {
       array: [1,2,3],
       boolean: true,
       number: 4,
       object: {
         foo: 'bar'
       }
     }
     ```

* **Error Response**
  * **Code:** 401 UNAUTHORIZED

    **Content:**

    ```json
     {
       error: "Log in"
     }
     ```

  * **Code:** 422 UNPROCESSABLE ENTRY

    **Content:**

    ```json
     {
       error: "Email Invalid"
     }
     ```

* **Example**

  ```
  http://api.nzeta/name?param=param?param2=param2
  ```
  ```json
     {
       array: [1,2,3],
       boolean: true,
       number: 4,
       object: {
         foo: 'bar'
       }
     }
     ```


