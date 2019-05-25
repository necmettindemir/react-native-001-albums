import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = (props) => { 

    
    
    const { 
            title,
            artist, 
            thumbnail_image, 
            image,
            url
          } = props.album;

    const { headerContentStyle, 
            thumbnailStyle, 
            thumbnailContainerStyle,
            headerTextStyle,
            imageStyle
          } = styles;
        
    // onPressButton = (parTitle) =>  {
    //      console.log('onPressButton :',parTitle);
    //  }

    OpenUrl = (pTitle, pUrl) => {
       // Linking.openURL(url);
       console.log(pTitle, pUrl);
    }

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                    style={thumbnailStyle}
                    source={{ uri: thumbnail_image }}                    
                    />                   
                </View>
 
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image   
                        style={imageStyle}                 
                        source={{ uri: image }}                    
                />   
            </CardSection>

            <CardSection>
                <Button  text="buy now" onPress={() => OpenUrl(title,url)} />
            </CardSection>
        </Card>
    );
};

const styles = {   
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};


export default AlbumDetail; 