import NextLink from 'next/link'
import { Card, CardBody, Heading, Image, Stack, Text, Grid, GridItem } from '@chakra-ui/react'

export const getStaticProps = async () => {
    // agregar el fetch aca
    const response = await fetch('https://randomuser.me/api/?foobar&results=10');
    const data = await response.json();

    return {
        props: {
            users: data.results
        }
    }
};

export default function Users({ users }) {

    return (
        <>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                {
                    users.map((user, index) => {

                        const { name, email, picture } = user;

                        return (
                            <GridItem key={`user-${index}`}>
                                <Card maxW='sm'>
                                    <CardBody>
                                        <Grid gap={8} gridTemplateRows={'1fr'} gridTemplateColumns={'1fr 2fr'}>
                                            <GridItem colSpan={1}>
                                                <Image
                                                    objectFit='cover'
                                                    src={picture.large}
                                                    alt={`${name.first} avatar image`}
                                                    borderRadius='lg'
                                                />
                                            </GridItem>
                                            <GridItem colSpan={1}>
                                                <Stack mt='4' spacing='3'>
                                                    <Heading size='md'>{name.first}</Heading>
                                                    <Text>{email}</Text>
                                                </Stack>
                                            </GridItem>
                                        </Grid>
                                    </CardBody>
                                </Card >
                            </GridItem>
                        )
                    })
                }
            </Grid>
        </>
    );
}