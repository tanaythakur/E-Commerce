import { useDispatch } from "react-redux";
import { addToCart } from "../Slices/Cart/CartSlice";
import { AspectRatio, Box, Button, Card, Container, Flex, Link, Text } from "@radix-ui/themes";


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Container className="bg-white  shadow-2xl overflow-x-hidden hover:shadow-lg transition-shadow">
      
      <AspectRatio ratio={4/3}>
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-48 object-cover cursor-pointer overflow-hidden"
        />
      </AspectRatio>
      
      
      <div className="p-4">
        <Text className="font-bold text-center text-lg mb-2 text-gray-800">{product.name}</Text>
        <Text className="text-sm text-gray-600 mb-2">{product.category}</Text>
        <Text className="text-gray-700 text-sm mb-3 line-clamp-2">
          {product.description}
        </Text>
        
        <Flex justify={"between"} mt="4">
          <Text size="4" color="green" weight="bold">
            ${product.price}
          </Text>

            <Button
              className="hover:bg-indigo-800"
              variant="soft"
              color="indigo"
              onClick={() => dispatch(addToCart(product))}
              highContrast 
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              Add to Cart
            </Button>
        </Flex>

      </div>
    </Container>
  );
};

export default ProductCard;
