import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

// class SearchBar extends React.Component {
//   state = { term: "" };

//   onFormSubmit = (event) => {
//     event.preventDefault();

//     this.props.onSubmit(this.state.term);
//   };

//   render() {
//   return (
//     <div className="search-bar ui segment">
//       <form className="ui form" onSubmit={this.onFormSubmit}>
//         <div className="field">
//           <label>Video Search</label>
//           <input
//             type="text"
//             value={this.state.term}
//             onChange={(event) => this.setState({ term: event.target.value })}
//           />
//         </div>
//       </form>
//     </div>
//   );
// }
// }

export default SearchBar;
