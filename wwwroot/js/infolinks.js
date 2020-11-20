

function createReactComponent  (id) {
    let element = React.createElement(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        'Like'
      );

    ReactDOM.render(element, document.getElementById(id));
}