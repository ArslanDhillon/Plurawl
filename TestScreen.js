import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Keyboard, KeyboardAvoidingView, TouchableOpacity, Text, StyleSheet, Platform, Dimensions, Image ,Modal} from 'react-native';
import { globalStyles } from './components/globalStyles/styles';

const TestScreen = () => {

    const { height, width } = Dimensions.get('window')
    const [showModal2, setShowModal2] = useState(false);

    return (

        <View style={{ alignItems: 'center', paddingTop: 50, flex: 1, backgroundColor: '#0f0f0f' }}>

            <TouchableOpacity style={{ height: 36 / 924 * height, width: 72 / 429 * width, alignSelf: 'center' }} onPress={()=>setShowModal2(true)}>
                < View
                    style={{ height: 36 / 924 * height, width: 72 / 429 * width, backgroundColor: '#FFFFFF30', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}
                >
                    <Text style={{ color: '#D44740' }}>Done</Text>
                </View>
            </TouchableOpacity>
            <Modal
                transparent={true}
                visible={showModal2}
                animationType='slide'
            >

                <View style={{  position: 'absolute', bottom: 20,height: 514 / 924 * height, width: width - 20 / 429 * width, borderRadius: 16 / 924 * height, borderWidth: 2, borderColor: '#1C1C1C', padding: 30, paddingTop: 10 }}>

                    <TouchableOpacity>

                        < View
                            style={{ height: 40 / 924 * height, width: 40 / 924 * height, backgroundColor: '#FFFFFF30', borderRadius: 20 / 924 * height, justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Image source={require('./assets/closeIcon.png')}
                                style={{ height: 24 / 924 * height, width: 24 / 924 * height }}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                            <Image source={require('./assets/Emotionalreasoning.png')}
                                style={globalStyles.circleImage}
                            />
                            <Text style={globalStyles.capsuleBtnText}>Emotional Reasoning</Text>

                        </View>
                        <TouchableOpacity style={{ alignSelf: 'center' }}>
                            <Image source={require('./assets/upArrowWhight.png')}
                                style={{ height: 24 / 924 * height, width: 24 / 924 * height, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>


                    </View>
                    <Text style={{
                        fontSize: 17 / 924 * height,
                        fontWeight: '500',
                        color: '#fff',
                        marginTop: 15 / 924 * height,
                    }}>
                        Emotional reasoning is a cognitive process by which an individual concludes that their emotional reaction proves
                        something is true, despite contrary empirical evidence. Emotional reasoning creates an 'emotional truth', which may
                        be in direct conflict with the inverse 'perceptional truth'. It can create feelings of anxiety, fear, and apprehension
                        in existing stressful situations, and as such, is often associated with or triggered by panic disorder or anxiety disorder.
                    </Text>

                    <TouchableOpacity style={{ marginTop: 35 / 924 * height, alignSelf: 'flex-start' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 / 424 * width, justifyContent: 'center' }}>
                            <Text style={[globalStyles.capsuleBtnText, { color: '#D44740' }]}>Example</Text>
                            <Image source={require('./assets/downArrowRed.png')}
                                style={{ height: 24, width: 24 }}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginTop: 35 / 924 * height, alignSelf: 'flex-start' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 / 424 * width, justifyContent: 'center' }}>
                            <Text style={[globalStyles.capsuleBtnText, { color: '#D44740' }]}>How to recognize</Text>
                            <Image source={require('./assets/downArrowRed.png')}
                                style={{ height: 24, width: 24 }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>


    );
};

const styles = StyleSheet.create({})


export default TestScreen;
