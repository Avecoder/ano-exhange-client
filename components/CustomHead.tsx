import {FC} from "react";
import Head from "next/head";

interface CustomHeadType {
    title: string,
    description: string
}

const CustomHead: FC<CustomHeadType> = ({title, description}) => {


    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        </Head>
    )
}

export default CustomHead