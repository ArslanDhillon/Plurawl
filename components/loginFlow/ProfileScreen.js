import {
    SafeAreaView, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput,
    Modal, FlatList, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ActivityIndicator
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyles } from '../globalStyles/styles';
import Api from '../Apis/ApiPaths';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from "expo-image-picker"


let placeholderImage = require("../../assets/yellowBg.png")

const { height, width } = Dimensions.get('window')

const ProfileScreen = (props) => {

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

    const [showIndicater, setShowIndicater] = useState(false);
    const [showImageIndicater, setShowImageIndicater] = useState(false);
    const [user, setUser] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageNamwe, setSelectedImageName] = useState(null)




    // const userData = route.params.user;
    // userData.name = name,
    //     userData.title = title,
    //     userData.company = company,
    //     userData.VateranStatus = selectedVateran,
    //     userData.identity = selectedIdentity,
    //     userData.Race = selectedRace,
    //     userData.LGBTQ = selectedLGBTQ,
    //     userData.industries = selectedIndustry,


    //     console.log(userData)



    useEffect(() => {
        const getUser = async () => {
            console.log("Loading user")
            const data = await AsyncStorage.getItem("USER")
            let u = JSON.parse(data)
            console.log("User in local storage is ", u)
            setUser(u)
            setName(u.user.name)
        }

        getUser()
    }, [])



    const uploadProfileImage = async (selectedImage, imageName) => {
        setShowImageIndicater(true)
        var formdata = new FormData()
        console.log("Uploading image")

        formdata.append('image', {
            name: imageName,
            type: 'JPEG',
            uri: Platform.OS === "ios" ? selectedImage.replace("file://", '') : selectedImage
        })
        try {

            const data = await AsyncStorage.getItem("USER")

            if (data) {
                console.log("Uploading image 2", Api.ApiUpdateProfile)
                let u = JSON.parse(data)
                setUser(u)
                setName(u.user.name)
                console.log("User obtained")
                const token = u.token;
                fetch(Api.ApiUpdateProfile, {
                    method: 'post',
                    headers: { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${token}` },
                    body: formdata
                }).then((result) => {
                    console.log("Uploaded profile image ", result)
                })
                    .catch((error) => {
                        console.log("Exception ", error)
                    })
                // if (result) {
                //     console.log("result profile upload is  ", result)

                //     let json = await result.json()
                //     if (json.status === true) {
                //         setShowIndicater(false)
                //         // console.log("result is ", json.data)
                //         u.user = json.data;
                //         //save user here

                //         await AsyncStorage.setItem("USER", JSON.stringify(u))

                //         console.log("update user data is ", data)

                //       
                //     }
                // }
            }
        } catch (error) {
            console.log("error finding ", error)
        }
    }

    const pickImage = async () => {
        try {


            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            console.log(result);

            //   if (!result.cancelled) {
            //     setImage(result.uri);
            //   }

            // const result = await ImagePicker.launchImageLibraryAsync({
            //     allowsEditing: true,
            //     quality: 0.4, // Define quality here
            // });

            if (!result.canceled) {
                console.log("result ", result.uri);
                // setSelectedImageName(result.assets[0].fileName)
                // setSelectedImage(result.assets[0].uri);

                //send profile image in user profile
                uploadProfileImage(result.assets[0].uri, result.assets[0].fileName);
            } else {
                alert("You did not select any image.");
            }
        } catch (error) {
            console.error("Error picking image:", error);
        }
    };





    const nxtBtnHandle = async () => {
        setShowIndicater(true)
        const postData = {
            // name: name,
            title: title,
            company: company,
            race: selectedRace,
            gender: selectedIdentity,
            lgbtq: selectedLGBTQ,
            veteran: selectedVateran,
            industry: selectedIndustry
        };
        try {

            const data = await AsyncStorage.getItem("USER")

            if (data) {
                let u = JSON.parse(data)
                setUser(u)


                const token = u.token;
                const result = await fetch(Api.ApiUpdateProfile, {
                    method: 'post',
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                    body: JSON.stringify(postData)
                })
                if (result) {
                    // console.log("result is ", result)

                    let json = await result.json()
                    if (json.status === true) {
                        setShowIndicater(false)
                        console.log("result is ", json.data)
                        u.user = json.data;
                        //save user here

                        await AsyncStorage.setItem("USER", JSON.stringify(u))

                        console.log("update user data is ", u)
                        console.log("post data is", postData)

                        props.navigation.navigate('WelcomeScreen')

                    }
                }
            }
        } catch (error) {
            console.log("error finding ", error)
        }
    };
    //madals array data

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
        <SafeAreaView style={{ height: height, backgroundColor: '#0f0f0f' }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1, flexDirection: 'column', }}>
                <TouchableWithoutFeedback style={globalStyles.container} onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1, backgroundColor: '#0f0f0f', alignItems: "center", width: width, }}>
                        <Text style={{ fontSize: 42 / 924 * height, fontWeight: '500', color: '#fff', width: 340 / 429 * width }}>A bit more about who you are </Text>
                        <Text numberOfLines={2} style={{
                            color: '#F8EDDA75', fontWeight: "500", fontSize: 17, marginTop: 15 / 924 * height,

                        }}>
                            Lorem ipsum dolor sit amet consectetur.
                        </Text>
                        <TouchableOpacity style={{ borderRadius: 40 / 924 * height, marginTop: 25 / 924 * height }}>
                            <Image source={selectedImage ? { uri: selectedImage } : placeholderImage}
                                style={{ height: 80 / 924 * height, width: 80 / 924 * height, borderRadius: 40 / 924 * height }}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginTop: 15 / 924 * height }} onPress={pickImage}>
                            <Text style={{ color: 'red', fontSize: 15, fontWeight: '500' }}>Add Photo</Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', width: width }}>
                            <Image source={require('../../assets/PageControl2.png')} style={{ height: 393 / 924 * height, width: 44 / 423 * width }} />
                            <View style={{ flexDirection: 'column' }}>

                                <View style={[globalStyles.inputContainer, { marginTop: 30 / 924 * height, backgroundColor: '#1C1C1C25', borderColor: "#1C1C1C25" }]}>
                                    <Text style={globalStyles.inputText}>Name:</Text>
                                    <TextInput placeholder='' style={[globalStyles.inputPlacholder,]} autoFocus={true}
                                        value={name}
                                        onChangeText={(text) => setName(text)}
                                    />
                                </View>
                                <View style={[globalStyles.inputContainer, { backgroundColor: '#1C1C1C25', borderColor: "#1C1C1C25" }]}>
                                    <Text style={globalStyles.inputText}>Title:</Text>
                                    <TextInput placeholder='' style={globalStyles.inputPlacholder}
                                        value={title}
                                        onChangeText={(text) => setTitle(text)} />
                                </View>
                                <View style={[globalStyles.inputContainer, { backgroundColor: '#1C1C1C25', borderColor: "#1C1C1C25" }]}>
                                    <Text style={globalStyles.inputText}>Company:</Text>
                                    <TextInput placeholder='' style={globalStyles.inputPlacholder}
                                        value={company}
                                        onChangeText={(text) => setCompany(text)} />
                                </View>

                                <View style={{ alignItems: 'center' }}>


                                    {/* Industry modal */}

                                    <View style={[styles.btnMainView, { marginTop: 25 / 924 * height }]}>
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
                                {showIndicater ? <ActivityIndicator color="#fff" size={'large'} style={{ marginTop: 30 / 924 * height, }} /> :

                                    <TouchableOpacity style={[globalStyles.capsuleBtn,
                                    { marginTop: 30 / 924 * height, width: 345 / 426 * width }]}
                                        onPress={nxtBtnHandle}
                                    >
                                        <Text style={globalStyles.capsuleBtnText}>
                                            Continoue
                                        </Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>

                    </View>
                </TouchableWithoutFeedback>

            </KeyboardAvoidingView>


        </SafeAreaView>


    )
}

export default ProfileScreen

const styles = StyleSheet.create({

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
        // borderBottomWidth: 1,
        // borderColor: '#000'
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
        marginTop: 10 / 924 * height,
        width: width
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