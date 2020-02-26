# Наконечники медные под пайку П

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies consequat magna a tincidunt. Nunc dignissim vel massa ut faucibus. Mauris porttitor ornare nisl, eget tincidunt enim. Suspendisse venenatis lacinia lobortis. Mauris faucibus mollis ex, sed dictum lacus semper ac. In tristique, nunc at rhoncus egestas, purus dolor porta ante, in rhoncus odio augue at dui. Sed pretium metus purus, et accumsan sapien faucibus at. Aliquam vulputate euismod magna consequat interdum.

* **URL**

`/nakonechniki/payka/` 

* **Method**

`GET` 

## Methods:
::: details List
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
* **URL**

    `/nakonechniki/payka/list`

* **Params**

    **Required:**

    | Parameter | Type   | Description |
    |-----------|--------|-------------|
    | api_key   | string | Description |

    **Optional:**

    | Parameter | Type   | Description |
    |-----------|--------|-------------|
    | limit     | number | Description |
    | price     | string | Description |
    | remained  | string | Description |
    | size      | string | Description |

* **Example**

  ```
  http://api.nzeta/nakonechniki/payka/list?param=param&param2=param2
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

:::

:::details Article
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
* **URL**

    `/nakonechniki/payka/{article}`

* **Example**

  ```
  http://api.nzeta/nakonechniki/payka/zeta10022
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

:::

### `/nakonechniki/payka/list`
Lorem ipsum dolor sit amet, consectetur adipiscing elit.

* **URL Params**

    **Required:**

    | Parameter | Type   | Description |
    |-----------|--------|-------------|
    | foo       | bar    | Description |

    **Optional:**

    | Parameter | Type   | Description |
    |-----------|--------|-------------|
    | limit     | number | Description |
    | price     | string | Description |
    | remained  | string | Description |
    | size      | string | Description |

* **Example**

  ```
  http://api.nzeta/nakonechniki/payka/list?param=param&param2=param2
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

### `/nakonechniki/payka/{article}`
Lorem ipsum dolor sit amet, consectetur adipiscing elit.

* **Example**

  ```
  http://api.nzeta/nakonechniki/payka/zeta10022
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


