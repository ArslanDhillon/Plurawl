import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import { globalStyles } from './globalStyles/styles';



const { height, width } = Dimensions.get('window')


const SlideScreen1 = (props) => {

    const nxtBtnAction = () =>{
        props.navigation.navigate('SignInScreen')
    }

    const mapRef = useRef();
    const [active, setActive] = useState(0)

    useEffect(() => {
        let interval = setInterval(() => {
            if (active === images.length - 1) {
                mapRef.current.scrollTo({x: width * 0, animated: true});
            } else {
                mapRef.current.scrollTo({x: width * (active + 1), animated: true});
            }
        }, 4000);
        return()=>clearInterval(interval)
    });

    const getItemLayout = (data, index) => ({
        length: width,
        offset: width * index,
        index:index ,

    })



    const images = [
        {
            image: require("../assets/iphone.png"),
            uperText: "Al Journal",
            sideImage: require("../assets/pageIcon.png"),
            subUperTExt: 'Our AI assists in comprehending daily emotions and deep thoughts, offering a non-judgmental perspective.'
        },
        {
            image: require("../assets/iphone.png"),
            uperText: "Rewards",
            sideImage: require("../assets/starIcon.png"),
            subUperTExt: 'Expand your emotional intelligence by journaling everything from daily emotions to deep thought sessions with Plurawl.'
        },
        {
            image: require("../assets/iphone.png"),
            uperText: "Encryption",
            sideImage: require("../assets/lockIcon.png"),
            subUperTExt: 'Expand your emotional intelligence by journaling everything from daily emotions to deep thought sessions with Plurawl.'
        },
    ];

    


    const change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

        if (slide !== active) {
            setActive(slide)
        }
    }
    return (
        <SafeAreaView style={{ backgroundColor: '#0f0f0f' }}>
            <View style={{ height: height }}>
                <View style={{ height: 700 / 926 * height, }}>
                    <ScrollView
                        ref={mapRef}
                        getItemLayout={getItemLayout}
                        pagingEnabled
                        horizontal
                        onScroll={change}
                        showsHorizontalScrollIndicator={false}
                        style={{ height: 550 / 926 * height }}
                    >
                        {images.map((item, index) => {
                            return (
                                <View key={index} style={{ height: 450 / 926 * height, alignItems: 'center' }}>
                                    <View style={{
                                        width: width - 40 / 429 * width, height: 509 / 926 * height, backgroundColor: '#141414', borderRadius: 16 / 926 * height,
                                        marginRight: 20 / 429 * width, marginLeft: 20 / 429 * width, marginTop: 60 / 925 * height, alignItems: 'center'
                                    }}>
                                        <Image
                                            source={item.image}
                                            style={{ height: 509 / 926 * height, width: 389 / 429 * width, resizeMode: "contain", }}
                                        />

                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: index === 0 ? 50 / 926 * height : 35 / 926 * width, gap: 10 }}>
                                        <Image source={item.sideImage}
                                            style={{ height: 18 / 852 * height, width: 18 / 429 * width, resizeMode: 'contain' }}
                                        />
                                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}>{item.uperText}</Text>

                                    </View>
                                    <Text numberOfLines={3} style={{
                                        color: '#fff', width: index === 0 ? 300 / 429 * width : 357 / 429 * width, textAlign: 'center',
                                        fontSize: index === 0 ? 10 : 12, marginTop: 15 / 926 * height
                                    }}>
                                        {item.subUperTExt}
                                    </Text>

                                </View>

                            )
                        })}

                    </ScrollView>
                </View>
                <View style={[styles.pagination, { marginTop: active === 0 ? 20 / 926 * height : 0 }]}>
                    {images.map((i, k) => {
                        return (
                            <Text key={k} style={k == active ? styles.activeDot : styles.dot}>.</Text>
                        )
                    })}
                </View>

                {active !== 0 ?
                    <TouchableOpacity style={[globalStyles.capsuleBtn, { alignSelf: 'center', marginTop: 24 / 926 * height }]}
                        onPress={nxtBtnAction}
                    >
                        <Text style={globalStyles.capsuleBtnText}>
                            Sign Up
                        </Text>
                    </TouchableOpacity> : ''}
            </View>
        </SafeAreaView>
    )
}

export default SlideScreen1;

const styles = StyleSheet.create({
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'center',
        height: 40 / 926 * height,
        width: width,

    },
    dot: {
        color: '#535353',
        fontSize: 50,
        height: 100
    },
    activeDot: {
        color: '#fff',
        height: 100,
        fontSize: 50,
    }
})
