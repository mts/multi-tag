import './TagList.scss';
import React, { Component } from 'react';
import {arrayOf, shape, number, string} from 'prop-types';
import Tag from '../../Molecules/Info/Tag';
import Input from '../../Atoms/Text/Input';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

class TagList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        items: this.props.items,
        newItemText: ''
    };
  }

  onChange = (e) => {
    this.setState({
      newItemText: e.target.value
    });
  }

  postTags = (items) => {
    const mock = new MockAdapter(axios);
    const tagsRoute = '/tags';

    mock.onPost(tagsRoute, items).reply(200);

    axios.post(tagsRoute, items)
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  onKeyPress = (e) => {
    const { items, newItemText } = this.state;

    if (newItemText.indexOf(',') >= 0 && (e.keyCode === 188 || e.keyCode === 9)) {
      this.setState({
        newItemText: newItemText.replace(',', '')
      });
      return;
    }

    if (newItemText !== '' &&
        (e.keyCode === 13 ||
          e.keyCode === 9 ||
          e.keyCode === 188
        )) {
      let newItems = items;
      newItems[items.length] = {"id": items.length, "text": newItemText};

      this.setState({
        items: newItems,
        newItemText: ''
      });

      this.postTags(newItems);
    }

    if (e.keyCode === 8) {
      let newItems = items;
      newItems.splice(-1,1);

      this.setState({
        items: newItems,
      });
    }
  }

  onClick = (id) => {
      const { items } = this.state;

      let newItems = items.filter((item) => {
        return item.id !== id
      });

      this.setState({
        items: newItems,
      });
  }

  componentDidMount() {
    document.getElementById('new-tag').focus()
  }

  render() {
    const { items, newItemText } = this.state;

    return (
      <div className="tag-list">
        {items && items.length > 0 ? items.map((item, index) => (
          <Tag
            key={index}
            id={item.id}
            text={item.text}
            onMouseDown={this.onClick}
          />
        )) : null}
        <div className="tag-list__new-tag">
          <Input
            onChange={this.onChange}
            onKeyDown={this.onKeyPress}
            borderless
            val={newItemText}
          />
        </div>
      </div>
    )
  }
}

TagList.propTypes = {
  items: arrayOf(
    shape({
      id: number,
      text: string
    })
  )
};

export default TagList;
