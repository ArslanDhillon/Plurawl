import React, { useState } from 'react'
import {
    SafeAreaView, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput,
    Modal, FlatList, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform
} from 'react-native';
import { globalStyles } from '../globalStyles/styles';


const { height, width } = Dimensions.get('window');

export default profileSettingsScreen = (props) => {

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);
    const [selectedIndustry, setSelectedIndustry] = useState('');
    const [selectedIdentity, setSelectedIdentity] = useState('');
    const [selectedRace, setSelectedRace] = useState('');
    const [selectedLGBTQ, setSelectedLGBTQ] = useState('');
    const [selectedVateran, setSelectedVetran] = useState('');

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');


    const industries = [
        {
            id: 1,
            name: 'Technology'
        },
        {
            id: 2,
            name: 'Manufacturing'
        },
        {
            id: 3,
            name: 'Production'
        },
        {
            id: 4,
            name: 'Textile'
        },
        {
            id: 5,
            name: 'Investment'
        },
    ]

    const identity = [
        {
            id: 1,
            name: 'Male'
        }, {
            id: 2,
            name: 'Female'
        },
    ]

    const Race = [
        {
            id: 1,
            name: 'Asian'
        },
        {
            id: 2,
            name: 'American'
        }, {
            id: 3,
            name: 'African'
        },
    ]

    const LGBTQ = [
        {
            id: 1,
            name: 'Yes'
        },
        {
            id: 2,
            name: 'No'
        },
    ]

    const VateranStatus = [
        {
            id: 1,
            name: 'Yes'
        },
        {
            id: 2,
            name: 'No'
        },
    ]



    return (
        <SafeAreaView style={{ backgroundColor: '#0f0f0f' }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1, flexDirection: 'column', }}>
                <TouchableWithoutFeedback style={globalStyles.container} onPress={Keyboard.dismiss}>

                    <View style={{ height: height, backgroundColor: '#0f0f0f', alignItems: 'center', }}>
                        <Text style={{ color: '#fff', fontSize: 42, fontWeight: "500", alignSelf: 'flex-start', marginTop: 35 / 924 * height }}> Settings </Text>
                        <View style={styles.mainView}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <TouchableOpacity onPress={()=>props.navigation.goBack()} >
                                    <Image source={require('../../assets/backArrowRed.png')}
                                        style={{ height: 24 / 924 * height, width: 24 / 924 * height, resizeMode: 'contain' }}
                                    />
                                </TouchableOpacity>

                                <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', justifyContent: 'center', }}>
                                    <Image source={require('../../assets/userIcon.png')}
                                        style={{ height: 24 / 924 * height, width: 24 / 924 * height, resizeMode: 'contain', marginTop: 5 / 924 * height }} />
                                    <Text style={globalStyles.capsuleBtnText}>Profile</Text>
                                </View>
                                <TouchableOpacity style={{ height: 36 / 924 * height, width: 70 / 429 * width, borderRadius: 18 / 924 * height, backgroundColor: '#25252555', justifyContent: "center", alignItems: 'center' }}>
                                    <Text style={{ color: '#D44740', textAlign: 'center' }}>Save</Text>

                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 / 429 * width, marginTop: 25 / 924 * height }}>
                                <Image source={require('../../assets/profileImage.png')}
                                    style={{ height: 56 / 924 * height, width: 56 / 926 * height, borderRadius: 28 / 924 * height, resizeMode: 'contain' }}
                                />

                                <TouchableOpacity>
                                    <Text style={{ fontSize: 15, fontWeight: '500', color: '#D44740' }}>Change photo</Text>

                                </TouchableOpacity>
                            </View>

                            <View style={[globalStyles.inputContainer, { marginTop: 30 / 924 * height, alignSelf: 'center' }]}>
                                <Text style={globalStyles.inputText}>Name:</Text>
                                <TextInput placeholder='' style={globalStyles.inputPlacholder} autoFocus={true}
                                    value={name}
                                    onChangeText={(text) => setName(text)}
                                />
                            </View>
                            <View style={[globalStyles.inputContainer, { alignSelf: 'center' }]}>
                                <Text style={globalStyles.inputText}>Title:</Text>
                                <TextInput placeholder='' style={globalStyles.inputPlacholder}
                                    value={title}
                                    onChangeText={(text) => setTitle(text)} />
                            </View>
                            <View style={[globalStyles.inputContainer, { alignSelf: 'center' }]}>
                                <Text style={globalStyles.inputText}>Company:</Text>
                                <TextInput placeholder='' style={globalStyles.inputPlacholder}
                                    value={company}
                                    onChangeText={(text) => setCompany(text)} />
                            </View>

                            <View style={{ alignItems: 'center' }}>


                                {/* Industry modal */}

                                <View style={styles.btnMainView}>
                                    <Text style={styles.text} >Industry:</Text>

                                    <TouchableOpacity style={styles.btnStyle}
                                        onPress={() => setShowModal1(true)}
                                    >
                                        <View style={styles.btnTextView}>
                                            <Text style={{ fontSize: 13, fontWeight: '700', color: '#fff', textAlign: 'center' }}>
                                                {selectedIndustry ? selectedIndustry : "Select"}
                                            </Text>
                                            <Image source={require('../../assets/downArrow.png')} style={styles.btnImage} />
                                        </View>
                                    </TouchableOpacity>
                                </View>


                                <Modal transparent={true} visible={showModal1} style={{ height: 100 / 924 * height }} >
                                    <View style={[styles.modalMainVeiw, { paddingTop: height / 2 - 100 }]} >

                                        <FlatList data={industries}
                                            renderItem={({ item }) => (
                                                <View style={styles.flatListView}>
                                                    <TouchableOpacity style={{ margin: 10 }}
                                                        onPress={() => {
                                                            setShowModal1(false)
                                                            setSelectedIndustry(item.name)
                                                        }}>
                                                        <Text style={styles.flatListText} >
                                                            {item.name}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            )}

                                        />
                                    </View>

                                </Modal>


                                {/* Identity modal */}


                                <View style={styles.btnMainView}>
                                    <Text style={styles.text} >Identity:</Text>

                                    <TouchableOpacity style={styles.btnStyle}
                                        onPress={() => setShowModal2(true)}
                                    >
                                        <View style={styles.btnTextView}>
                                            <Text style={{ fontSize: 13, fontWeight: '700', color: '#fff', textAlign: 'center' }}>
                                                {selectedIdentity ? selectedIdentity : "Select"}
                                            </Text>
                                            <Image source={require('../../assets/downArrow.png')} style={styles.btnImage} />
                                        </View>
                                    </TouchableOpacity>
                                </View>


                                <Modal transparent={true} visible={showModal2} style={{ height: 100 / 924 * height }} >
                                    <View style={[styles.modalMainVeiw, { paddingTop: height / 2 }]} >

                                        <FlatList data={identity}
                                            renderItem={({ item }) => (
                                                <View style={styles.flatListView}>
                                                    <TouchableOpacity style={{ margin: 10 }}
                                                        onPress={() => {
                                                            setShowModal2(false)
                                                            setSelectedIdentity(item.name)
                                                        }}>
                                                        <Text style={styles.flatListText} >
                                                            {item.name}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            )}

                                        />
                                    </View>

                                </Modal>


                                {/* Race/Ethnticity modal */}


                                <View style={styles.btnMainView}>
                                    <Text style={styles.text} >Race/Ethnicity:</Text>

                                    <TouchableOpacity style={styles.btnStyle}
                                        onPress={() => setShowModal3(true)}
                                    >
                                        <View style={styles.btnTextView}>
                                            <Text style={{ fontSize: 13, fontWeight: '700', color: '#fff', textAlign: 'center' }}>
                                                {selectedRace ? selectedRace : "Select"}
                                            </Text>
                                            <Image source={require('../../assets/downArrow.png')} style={styles.btnImage} />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <Modal transparent={true} visible={showModal3} style={{ height: 100 / 924 * height }} >
                                    <View style={[styles.modalMainVeiw, { paddingTop: height / 2 - 50 }]} >

                                        <FlatList data={Race}
                                            renderItem={({ item }) => (
                                                <View style={styles.flatListView}>
                                                    <TouchableOpacity style={{ margin: 10 }}
                                                        onPress={() => {
                                                            setShowModal3(false)
                                                            setSelectedRace(item.name)
                                                        }}>
                                                        <Text style={styles.flatListText} >
                                                            {item.name}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            )}

                                        />
                                    </View>

                                </Modal>



                                {/* LGBTQ+ modal */}

                                <View style={styles.btnMainView}>
                                    <Text style={styles.text} >LGBTQ+:</Text>

                                    <TouchableOpacity style={styles.btnStyle}
                                        onPress={() => setShowModal4(true)}
                                    >
                                        <View style={styles.btnTextView}>
                                            <Text style={{ fontSize: 13, fontWeight: '700', color: '#fff', textAlign: 'center' }}>
                                                {selectedLGBTQ ? selectedLGBTQ : "Select"}
                                            </Text>
                                            <Image source={require('../../assets/downArrow.png')} style={styles.btnImage} />
                                        </View>
                                    </TouchableOpacity>
                                </View>


                                <Modal transparent={true} visible={showModal4} style={{ height: 100 / 924 * height }} >
                                    <View style={[styles.modalMainVeiw, { paddingTop: height / 2 }]} >

                                        <FlatList data={LGBTQ}
                                            renderItem={({ item }) => (
                                                <View style={styles.flatListView}>
                                                    <TouchableOpacity style={{ margin: 10 }}
                                                        onPress={() => {
                                                            setShowModal4(false)
                                                            setSelectedLGBTQ(item.name)
                                                        }}>
                                                        <Text style={styles.flatListText} >
                                                            {item.name}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            )}

                                        />
                                    </View>

                                </Modal>

                                {/* Vateran status MODAL */}

                                <View style={styles.btnMainView}>
                                    <Text style={styles.text} >Vateran status:</Text>

                                    <TouchableOpacity style={styles.btnStyle}
                                        onPress={() => setShowModal5(true)}
                                    >
                                        <View style={styles.btnTextView}>
                                            <Text style={{ fontSize: 13, fontWeight: '700', color: '#fff', textAlign: 'center' }}>
                                                {selectedVateran ? selectedVateran : "Select"}
                                            </Text>
                                            <Image source={require('../../assets/downArrow.png')} style={styles.btnImage} />
                                        </View>
                                    </TouchableOpacity>
                                </View>


                                <Modal transparent={true} visible={showModal5} style={{ height: 100 / 924 * height }} >
                                    <View style={[styles.modalMainVeiw, { paddingTop: height / 2 }]} >

                                        <FlatList data={VateranStatus}
                                            renderItem={({ item }) => (
                                                <View style={styles.flatListView}>
                                                    <TouchableOpacity style={{ margin: 10 }}
                                                        onPress={() => {
                                                            setShowModal5(false)
                                                            setSelectedVetran(item.name)
                                                        }}>
                                                        <Text style={styles.flatListText} >
                                                            {item.name}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            )}

                                        />
                                    </View>

                                </Modal>
                            </View>


                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 20 / 924 * height,
        width: 20 / 924 * height,
        resizeMode: 'contain'
    },
    text: {
        fontSize: 17,
        fontWeight: '500',
        color: '#fff'
    },
    viewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    btnStyle: {
        alignSelf: 'flex-start',
        marginTop: 16 / 924 * height,
    },
    mainView: {
        width: 390 / 429 * width,
        backgroundColor: '#1C1C1C',
        borderRadius: 16 / 924 * height,
        marginTop: 16 / 924 * height,
        padding: 16 / 924 * height
    },

    text: {
        // backgroundColor:'red',

        fontSize: 8,
        fontWeight: '500',
        color: "#F8EDDA50",
        width: 88 / 429 * width,
        // marginLeft: 50 / 429 * width,
    },
    modalMainVeiw: {
        // width: 254 / 429 * width,
        width: width,
        height: height,
        backgroundColor: "#25252585",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: height / 2,
        alignSelf: "center"
    },
    flatListView: {
        width: 254 / 429 * width,
        backgroundColor: "#252525",
        borderBottomWidth: 1,
        borderColor: '#000'
    },
    flatListText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#fff',
        textAlign: "center"
    },
    btnMainView: {
        flexDirection: 'row',
        // gap: 10,
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 25 / 924 * height,

    },
    btnTextView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 230 / 426 * width,
        paddingLeft: 15 / 426 * width,
        paddingRight: 15 / 426 * width
    },
    btnImage: {
        height: 18 / 924 * height,
        width: 18 / 426 * width,
        resizeMode: 'contain'
    },
    btnStyle: {
        height: 40 / 924 * height,
        width: 230 / 426 * width,
        backgroundColor: "#25252555",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20 / 924 * height
    }

})