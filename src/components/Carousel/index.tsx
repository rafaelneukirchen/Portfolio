import React, { useState } from "react";
import { Card, Category, Footer, Image, Sizes, Title, Value } from "./styles";

const Carousel: React.FC = () => {
    const [items, setItems] = useState([] as {
        title: string,
    }[]);
    return (
        <>
            {items.map((item) => (
                    <Card key={item.title}>
                        <Image />
                        <div>
                            <Title></Title>
                            <Category></Category>
                        </div>
                        {/* footer */}
                        <Footer>
                            {/* 75% tamanhos */}
                            <Sizes></Sizes>
                            {/* 25 valor */}
                            <Value></Value>
                        </Footer>
                    </Card>
                )
            )}
        </>
    )
}

export default Carousel;