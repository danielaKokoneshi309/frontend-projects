import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  HStack,
  Text,
  Image,
} from '@chakra-ui/react';
import useCartStore from '../stores/addToCartStore';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cartItems, totalPrice, increaseQuantity, decreaseQuantity, removeCartItem } = useCartStore();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cart</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} align="stretch">
            {cartItems.map(item => (
              <HStack key={item.id} justifyContent="space-between">
                <Image src={"https://image.tmdb.org/t/p/w200/" + item.poster_path} boxSize="50px" />
                <Text>{item.title}</Text>
                <Text>{item.price} ALL</Text>
                <Text>Quantity: {item.quantity}</Text>
                <HStack>
                  <Button onClick={() => increaseQuantity(item.id)}>+</Button>
                  <Button onClick={() => decreaseQuantity(item.id)}>-</Button>
                  <Button onClick={() => removeCartItem(item.id)}>Remove</Button>
                </HStack>
              </HStack>
            ))}
          </VStack>
          <Text mt={4}>Total Price: {totalPrice} ALL</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CartModal;
