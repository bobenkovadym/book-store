import React from 'react';
import { Menu, Popup, Button, Image, List } from 'semantic-ui-react';

const CartComponent = ({ title, image, id, removeFromCart }) => (
  <List selection divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={removeFromCart.bind(this, id)} color="red">Удалить</Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
)

const MenuComponent = ({ totalPrice, count, items }) => (
  <Menu>
    <Menu.Item
      name='browse'
    >
      Магазин книг
    </Menu.Item>

    <Menu.Menu position='right'>
      <Menu.Item
        name='signup'
      >
        Итого &nbsp; <b>{totalPrice}</b> &nbsp; грн.
      </Menu.Item>
      <Popup
        trigger={
          <Menu.Item name='help'>
            Корзина &nbsp; <b>{count > 0 && `(${count})`}</b>
          </Menu.Item>
        }
        content={items.map(book => <CartComponent {...book} />)}
        on="click"
        hideOnScroll
      />
    </Menu.Menu>
  </Menu>
)

export default MenuComponent;
