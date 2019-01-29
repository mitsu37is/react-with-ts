interface Product {
    readonly name: string;
    unitPrice: number;
}

interface DiscountCode {
    code: string;
    percentage: number;
}

interface ProductWithDiscountCodes extends Product {
    discountCodes: DiscountCode[];
}

interface OrderDetail {
    product: Product;
    quantity: number;
    dateAdded?: Date;
    getTotal(discount?: number): number;
}

const table: ProductWithDiscountCodes = {
    name: "Table",
    unitPrice: 500,
    discountCodes: [
        { code: 'SUMMER10', percentage: 0.1 },
        { code: 'BFRI', percentage: 0.2 }
    ]
}

const tableOrder: OrderDetail = {
    product: table,
    quantity: 1,
    getTotal(discountPercentage?: number): number {
        const priceWithoutDiscount = this.product.unitPrice *
        this.quantity;
        const discountAmount = priceWithoutDiscount * ( discountPercentage || 0 );
        return priceWithoutDiscount - discountAmount;
    }
}

tableOrder.getTotal()