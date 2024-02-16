import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')

const globalStyles = StyleSheet.create({
    capsuleBtn: {
        height: 52 / 926 * height,
        width: 381 / 429 * width,
        backgroundColor: '#611F1C',
        borderRadius: 26 / 926 * height,
        alignItems: 'center',
        justifyContent: 'center',

    },
    capsuleBtnText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#fff',
    },
    inputContainer: {
        height: 34 / 926 * height,
        width: 325 / 429 * width,
        borderWidth: 1,
        borderRadius: 17 / 924 * height,
        borderColor: "#25252555",
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10 / 429 * width,
        marginTop: 10 / 924 * height
    },
    inputText: {
        fontSize: 10,
        fontWeight: '500',
        color: "#F8EDDA50",
        width: 64 / 429 * width
    },
    inputPlacholder: {
        fontSize: 12,
        color: '#fff',
        width: 300 / 429 * width,
        flex: 1,

    },
    rectangularBtn: {
       
        height: 54 / 926 * height,
        width: 345 / 429 * width,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rectangularBtnImage: {
        height: 24 / 926 * height,
        width: 24 / 429 * width,
        resizeMode: "contain"
    },
    rectangularBtnText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: '500',
        marginTop: 4
    },
    circleImage :{
        height:32/924*height,
        width:32/924*height,
        resizeMode:'contain'
    }
})



export { globalStyles }