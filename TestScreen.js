import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native';

const { height, width } = Dimensions.get("window")

const HEPF = require("./assets/All_Images/HEPFullscreen_3x.png")
const SongIcon =require("./assets/All_Images/ArtIcon3_3x.png")

const Data = [
  {
    id:1,
    Name:"Who Am I (What’s My Name)?",
    Tital:"Snoop Dogg",
    // SongImage:

  }
]

export default function TestScreen() {
  return (
    <SafeAreaView style={styles.container} >
      <ScrollView   
        pagingEnabled
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
      <View style={{ height: height, width: 410 / 426 * width, overflow: "hidden", borderRadius: 24 / 924 * height,  }} >
        <ImageBackground source={HEPF} style={{ height: height, width: 410 / 426 * width, overflow: "hidden", alignItems: "center", }} >
          <Text style={{fontSize:34,fontWeight:"500",marginTop:90/924*height}} > Last Week's Vibe </Text>
          <Text style={{fontSize:22,color:"#12121290"}} >December 17 - 23</Text>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:width-17,marginTop:27/924*height}} >
            <View style={{height:100/924*height,width:28/426*width,backgroundColor:"#a19a7a",borderRadius:50/924*height,alignItems:"center",justifyContent:"center"}} >
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#fff",}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
            </View>
            <View style={{borderRadius:173/924*height,overflow:"hidden"}} >
            <Image source={require('./assets/All_Images/Gif/ladyDanceGif.gif')} style={{ height: 346 / 924 * height, width: 346 / 924 * height, resizeMode:"cover",overflow:"hidden" }} />
            </View>
          <View ></View>
          </View>
          <View style={{alignItems:"center"}} >
            <Text style={{marginTop:22/924*height,color:"#121212",fontSize:13,fontWeight:"400"}} >High Energy </Text>
            <Text style={{color:"#121212",fontSize:34,marginTop:8/924*height,fontWeight:"500"}} >Pleasant </Text>
            <Text style={{color:"#121212",fontSize:22,marginTop:60/924*height,fontWeight:"400",}} >Explore your mood</Text>
            <Text style={{color:"#12121270",fontSize:17,marginTop:16/924*height,fontWeight:"400"}} >Swipe up</Text>
            <Image source={require("./assets/All_Images/BlackDownArrow_3x.png")} style={{height:33/924*height,width:31/926*width,resizeMode:"contain",marginTop:16/924*height}} />
          </View>
        </ImageBackground>
      </View>

      <View style={{ height: height, width: 410 / 426 * width, overflow: "hidden", borderRadius: 24 / 924 * height,  }} >
        <ImageBackground source={HEPF} style={{ height: height, width: 410 / 426 * width, overflow: "hidden", alignItems: "center", }} >
          <View style={{flexDirection:"row",alignItems:"center",width:width-100,gap:5/426*width,marginTop:48/924*height}} >
            <Image source={require("./assets/All_Images/WrightICone_3x.png")} style={{height:20/924*height,width:20/924*height}} />
            <Text style={{color:"#12121250",fontSize:17,fontWeight:"800"}} >Weekly summary</Text>
          </View>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:width-17,marginTop:27/924*height}} >
          <View style={{height:100/924*height,width:28/426*width,backgroundColor:"#a19a7a",borderRadius:50/924*height,alignItems:"center",justifyContent:"center"}} >
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#fff",marginTop:8/924*height}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
            </View>
            <View style={{width:width-75}} >
            <Text style={{color:"#121212",fontSize:34,fontWeight:"500"}} >It looks like your week started off a little rough which is normal. Great thing is you ended the week in a better place. Take a look at some insights on how we can help you understand this emotional trends.</Text>
            </View>
          <View ></View>
          </View>
          <View style={{height:248/924*height,width:width-68,backgroundColor:"#FCEFC250",borderRadius:16/924*height,marginTop:31/924*height}}>
            <View style={{flexDirection:"row",alignItems:"center",gap:5/924*height,marginLeft:32/426*width,marginRight:32/426*width,marginTop:16/924*height}} >
            <Image source={require("./assets/All_Images/MassageIcon_3x.png")} style={{height:22/924*height,width:22/924*height}} />
            <Text style={{fontSize:17,fontWeight:"800",color:"#12121250"}} >Tip</Text>
            </View>
            <Text style={{marginLeft:32/426*width,marginRight:32/426*width,marginTop:16/924*height,color:"#121212",fontSize:20,fontWeight:"400"}} >Try taking 5 minutes before you start each day to focus on what you hope to achieve with a quick journal.</Text>
              <TouchableOpacity style={{flexDirection:"row",alignItems:"center",justifyContent:"center",gap:5/426*width,marginTop:16/924*height}} >
                <Text style={{color:"#D44740",fontSize:17,fontWeight:"700"}} >Set reminder</Text>
                <Image source={require("./assets/All_Images/WatchIcon_3x.png")} style={{height:20/924*height,width:20/924*height}} />
              </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      <View style={{ height: height, width: 410 / 426 * width, overflow: "hidden", borderRadius: 24 / 924 * height,  }} >
        <ImageBackground source={HEPF} style={{ height: height, width: 410 / 426 * width, overflow: "hidden", alignItems: "center", }} >
        <View style={{flexDirection:"row",alignItems:"center",width:width-100,gap:5/426*width,marginTop:48/924*height}} >
            <Image source={require("./assets/All_Images/Dummy_Circle_Small_3x.png")} style={{height:24/924*height,width:24/924*height}} />
            <Text style={{color:"#12121250",fontSize:17,fontWeight:"800"}} >Let’s Reflect</Text>
          </View>
          <View style={{width:width-100,marginTop:26/924*height}} >
            <Text style={{color:"#121212",fontSize:34,fontWeight:"500"}} >What do you think helped contribute to your vibe this past week?</Text>
            </View>
          
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:width-17,marginTop:50/924*height}} >
          <View style={{height:100/924*height,width:28/426*width,backgroundColor:"#a19a7a",borderRadius:50/924*height,alignItems:"center",justifyContent:"center"}} >
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#fff",marginTop:8/924*height}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
            </View>
            <TextInput
          
            placeholder='Type Here....'
            numberOfLines={5}
            textAlignVertical='top'
            maxLength={1500}
            multiline={true}
            autoFocus={true}
            style={{padding:10/924*height,height:147/924*height,width:310/426*width,backgroundColor:"#ffffff50",borderRadius:16/924*height}}></TextInput>
            

          <View ></View>
          </View>
        </ImageBackground>
      </View>

      <View style={{ height: height, width: 410 / 426 * width, overflow: "hidden", borderRadius: 24 / 924 * height,  }} >
        <ImageBackground source={HEPF} style={{ height: height, width: 410 / 426 * width, overflow: "hidden", alignItems: "center", }} >
        <View style={{flexDirection:"row",alignItems:"center",width:width-100,gap:5/426*width,marginTop:48/924*height}} >
            <Image source={require("./assets/All_Images/HeadPhoneIcon_3x.png")} style={{height:24/924*height,width:24/924*height}} />
            <Text style={{color:"#12121250",fontSize:17,fontWeight:"800"}} >Your Soundtrack</Text>
          </View>
          <View style={{width:width-100,marginTop:24/924*height}} >
            <Text style={{color:"#121212",fontSize:34,fontWeight:"500"}} >There was an earful of songs you came back to again & again</Text>
            </View>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:width-17,marginTop:32/924*height}} >
          <View style={{height:100/924*height,width:28/426*width,backgroundColor:"#a19a7a",borderRadius:50/924*height,alignItems:"center",justifyContent:"center"}} >
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#fff",marginTop:8/924*height}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
            </View>
            <View style={{borderRadius:173/924*height,overflow:"hidden"}} >
            <Image source={require('./assets/All_Images/ArtImage_3x.png')} style={{ height: 346 / 924 * height, width: 346 / 924 * height, resizeMode:"cover",overflow:"hidden" }} />
            </View>
          <View ></View>
          </View>
          <View style={{alignItems:"center",marginTop:24/924*height}} >
           <Text style={{color:"#121212",fontSize:34,fontWeight:"500"}} >Lite Spots</Text>
           <Text style={{color:"#12121250",fontSize:17,fontWeight:"700"}} >KAYTRANADA</Text>
          </View>

          {/* <FlatList
           // data={Data}
            renderItem={({ item }) =>
                    <TouchableOpacity style={{height:77924*height,width:325/426*width,backgroundColor:"red",borderRadius:200/924*width}} >
                      
                    </TouchableOpacity>
                    
                    
                }/> */}

        </ImageBackground>
      </View>

      <View style={{ height: height, width: 410 / 426 * width, overflow: "hidden", borderRadius: 24 / 924 * height,  }} >
        <ImageBackground source={HEPF} style={{ height: height, width: 410 / 426 * width, overflow: "hidden", alignItems: "center", }} >
        <View style={{width:width-100,marginTop:92/924*height}} >
            <Text style={{color:"#121212",fontSize:34,fontWeight:"500"}} >You’re all caught up!</Text>
            <View style={{flexDirection:"row",marginTop:85/924*height,justifyContent:"space-between"}}>
            <View>
            <Text style={{fontSize:34,color:"#22211f",}} >High Energy</Text>
            <Text style={{fontSize:34,color:"#22211f",}} >Pleasant</Text>
            </View>
            <Image source={require('./assets/All_Images/ArtImage_3x.png')} style={{ height: 61 / 924 * height, width: 61 / 924 * height, resizeMode:"cover",overflow:"hidden", marginTop:50/924*height, marginRight:25/924*height }} />
            </View>
            </View>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:width-17,marginTop:-10/924*height}} >
          <View style={{height:100/924*height,width:28/426*width,backgroundColor:"#a19a7a",borderRadius:50/924*height,alignItems:"center",justifyContent:"center",marginTop:-20/924*height}} >
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#fff",marginTop:8/924*height}} ></View>
            </View>
            <View style={{borderRadius:173/924*height,overflow:"hidden"}} >
            <Image source={require('./assets/All_Images/Gif/ladyDanceGif.gif')} style={{ height: 203 / 924 * height, width: 206 / 924 * height, resizeMode:"cover",overflow:"hidden" }} />
            </View>
          <View ></View>
          </View>
          <View style={{flexDirection:"row",marginTop:-80/924*height,justifyContent:"space-between",width:width-100}} > 
              <Image source={require("./assets/All_Images/ArtIcon2_3x.png")} style={{ height: 78 / 924 * height, width: 78 / 924 * height, resizeMode:"cover",overflow:"hidden",marginLeft:10/924*height }}  />
              <Image source={require('./assets/All_Images/ArtImage_3x.png')} style={{ height: 110 / 924 * height, width: 110 / 924 * height, resizeMode:"cover",overflow:"hidden",  }} /> 
            </View>
              
              <View style={{marginRight:60/924*height,marginTop:60/924*height}} > 
              <Image source={require("./assets/All_Images/ArtIcon3_3x.png")} style={{height:68/924*height,width:67/924*height,}} />
              </View>
              
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 / 426 * width, marginTop: 130 / 924 * height,backgroundColor:"#25252560",height:60/924*height,width:381/426*width,borderRadius:80/924*height,alignItems:"center",justifyContent:"center" }} >
              <Image source={require("./assets/All_Images/ShareIcon_3x.png")} style={{ height: 24 / 924 * height, width: 24 / 924 * height }} />
              <Text style={{ color: "#F8EDDA", fontSize: 17, fontWeight: "800" }} >Let’s Reflect</Text>
            </View>
        </ImageBackground>
      </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
    justifyContent: "flex-end",



  },
});