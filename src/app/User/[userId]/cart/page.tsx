import CartContainer from "../../../../Components/vistasPaginas/UserContainer/[Id]/CartCon/CartContainer";

const Cart = ({ params }: { params: { userId: string } }) =>{
    const { userId: userId } = params;
    const userIdToNum = parseInt(userId, 10); 

    return(
        <CartContainer userId={userIdToNum} />
    )
}

export default Cart;
