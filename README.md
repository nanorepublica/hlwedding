# Wedding Site

## Creating new section

* Create a new markdown file in `./sections/` directory with the following front matter:

    ```
    ---
    layout: content
    key: <name of sections>
    ---
    ```

* Add a hash to the `sections` in `_config.yml` like so:

    ```
    - key: <name of section # should match the above file>
      menu: <true|false> # should this section appear in the top menu?
      title: <nice name for the section>
    ```
