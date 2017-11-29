# reveal-ck-mermaid-plugin

This is a plugin that can easily use mermaid with reveal-ck.

## Installation

    % gem install reveal-ck-mermaid-plugin

## Usage

    % mkdir foo
    % cd foo
    % touch slides.md
    % reveal-ck-mermaid-plugin
    % reveal-ck generate

in slides.md:

    ```mermaid
    sequenceDiagram
        Client -->> Server: Connection
        Server ->> Client: Initial
        Client ->> Server: Authentication
        Server ->> Client: OK
    ```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/tmtm/reveal-ck-mermaid-plugin.
