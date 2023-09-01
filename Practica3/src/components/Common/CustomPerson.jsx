import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';

const CustomPerson = ({ name, lastName, image, index, movies }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                backgroundColor: index % 2 === 0 ? '#BC91FF' : '#FFC1E3',
                width: Dimensions.get('screen').width,
                // height: 100,
                alignItems: 'center'
            }}
        >
            <Image
                source={{ uri: image }}
                style={{
                    width: '35%',
                    height: '100%',
                    resizeMode: 'cover'
                }}
            />
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    paddingLeft: 10,
                    // paddingRight: 10,
                    paddingVertical: 10
                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}
                >
                    {name}
                </Text>
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}
                >
                    {lastName}
                </Text>
                {movies && (
                    <View>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 16
                            }}
                        >
                            Películas:
                        </Text>
                        {movies.map((movie, movieIndex) => (
                            <Text
                                key={movieIndex}
                                style={{
                                    color: '#fff',
                                    fontSize: 16
                                }}
                            >
                                {movie}
                            </Text>
                        ))}
                    </View>
                )}
            </View>
        </View>
    );
};

export default CustomPerson;
