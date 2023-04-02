import { ChakraProvider } from '@chakra-ui/react'
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import { Grid, GridItem } from '@chakra-ui/react'

export default function Layout({ children }) {
    return (
        <ChakraProvider>
            <Grid templateAreas={`"nav nav nav" "main main main" "footer footer footer"`} templateRows={'50px 1fr 30px'} templateColumns={'1fr 900px 1fr'}>
                <GridItem colSpan={3} rowSpan={1} area={'nav'}>
                    <Navbar />
                </GridItem>

                <GridItem colSpan={3} rowSpan={1} bg='' area={'main'} >
                    {children}
                </GridItem>

                <GridItem colSpan={3} rowSpan={1} area={'footer'}>
                    <Footer />
                </GridItem>
            </Grid>
        </ChakraProvider>
    );
}