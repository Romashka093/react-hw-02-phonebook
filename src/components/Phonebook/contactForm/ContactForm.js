import React, { Fragment, Component } from 'react';
import { Button } from '../../../ui/button/Button';
import { Input } from '../../../ui/input/Input';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = ({ target: { name, value } }) => {
    if (name === value) {
      return alert('NOT1');
    }
    this.setState({
      // id: this.props.id,
      [name]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onAddContact({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    const { id } = this.props;
    return (
      <Fragment>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="name"
            onChange={this.handleChange}
            titleNameInput="Name"
            type="text"
            placeholder="enter name"
            value={name}
            id={id}
          />
          <Input
            name="number"
            onChange={this.handleChange}
            titleNameInput="Number"
            type="tel"
            placeholder="enter number"
            value={number}
            id={id}
          />
          <br />
          <Button name="Add contact" type="submit" />
        </form>
      </Fragment>
    );
  }
}
// onHandleChange, id, onHandleSubmit, onAddContact
// export function ContactForm({ name, number, onHandleChange, id, onHandleSubmit, onAddContact }) {
// 	return (
// <Fragment>
// 	<h2>Phonebook</h2>
// 	<form onSubmit={onHandleSubmit}>
// 		<Input
// 			name="name"
// 			onChange={onHandleChange}
// 			titleNameInput="Name"
// 			type="text"
// 			placeholder="enter name"
// 			value={name}
// 			id={id}
// 		/>
// 		<Input
// 			name="number"
// 			onChange={onHandleChange}
// 			titleNameInput="Number"
// 			type="tel"
// 			placeholder="enter number"
// 			value={number}
// 			id={id}
// 		/>
// 		<br />
// 		<Button name="Add contact" />
// 	</form>
// </Fragment>
// 	);
// }
