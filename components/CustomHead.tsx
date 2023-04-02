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
        </Head>
    )
}

export default CustomHead