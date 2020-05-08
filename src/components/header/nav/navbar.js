import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./menu.css";

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return (
    <div>
      <div className="menu-item">{text}</div>
    </div>
  );
};

// All items component
// Important! add unique key
export const Menu = list =>
  list.map(el => {
    const { name } = el;
    const { id } = el;

    return <MenuItem text={name} key={id} />;
  });

 const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
 };

export class NavBar extends Component {
  state = {
    selected: "0",
    MenuItems: []
  };

  componentDidMount() {
    fetch("navmain.json")
      .then(res => res.json())
      .then(result => {
          console.log("This is navigation json result", result)
        const items = result.results.map((el, idx) => {
          return { name: el.category, id: idx };
        });
        this.setState({
          isLoaded: true,
          MenuItems: items
        });
      });
  }

  render() {
    const { selected, MenuItems } = this.state;
    // Create menu from items
    const menu = Menu(MenuItems, selected);

    return (
      <div>
        <ScrollMenu
          data={menu}
          selected={selected}
          onSelect={this.onSelect}
          alignCenter={true}
          tabindex="0"
        />
      </div>
    );
  }
}

export default NavBar;

 
// class NavBar extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <nav className="navbar navbar-dark bg-dark mb-3">
//           <a className="navbar-brand" href="#">
//             <h1>Total Items <span className="badge badge-secondary">{this.props.totalItems}</span></h1>
//           </a>
//         </nav>
//       </React.Fragment>
//     );
//   }
// }
 
// export default NavBar;