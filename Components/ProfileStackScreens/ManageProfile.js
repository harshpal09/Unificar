import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import { ProfileCardComponent } from '../../export'
import globalStyles, { LARGE_FONT_SIZE, width } from '../../Styles/global';
import {DataTable} from 'react-native-paper';

export default function ManageProfile({route}) {
  const [data, setData] = useState(undefined)
  const [isLoading,setIsLoading] =useState(false);
  useEffect(()=>{
    setIsLoading(true);
    const {data} = route.params;
    setData(data);
    setIsLoading(false);
  },[])
    // const data=[{'key' : 'Contact Number','value' : '8126830270'},{'key':'Alternate Number','value':'8468362983'},{'key':'Email','value': 'harshpal830@gmail.com'},{'key':'DOB','value':'09/04/2000'}];
    // const data_1=[{'key' : 'Contact Number','value' : '8126830270'},{'key':'Alternate Number','value':'8468362983'},{'key':'Email','value': 'harshpal830@gmail.com'},{'key':'DOB','value':'09/04/2000'}];
  return (
    <SafeAreaView style={[globalStyles.mainContainer]}>
        { data == undefined ? <ActivityIndicator size={"large"} />:
                <SafeAreaView
                   style={[globalStyles.mainContainer, globalStyles.flexBoxAlign,{marginVertical:10}]}>
                   <View style={[globalStyles.cardTable,globalStyles.flexBox, { width: '100%', padding: 5 }]}>
                         <View style={[globalStyles.cardProfileHeader]}>
                           <View style={[globalStyles.rowContainer]}>
                             <View
                               style={[
                                 globalStyles.flexBox,
                                 globalStyles.profileHeaderImageContainer,
                               ]}>
                               <Image
                                 style={[globalStyles.profileHeaderImage]}
                                 source={require('../../Assets/Images/avatar_img.jpeg')}
                               />
                             </View>
                             <View
                               style={[
                                 globalStyles.columnContainer,
                                 globalStyles.flexBox,
                                 globalStyles.profileHeaderTextConatainer,
                               ]}>
                               <View>
                                 <Text
                                   style={[
                                     {
                                       fontSize: LARGE_FONT_SIZE,
                                       letterSpacing: 1,
                                       fontWeight: '400',
                                       color: 'white',
                                     },
                                   ]}>
                                   Hello
                                 </Text>
                                 <Text style={[globalStyles.profileHeaderText]}>{data.name}</Text>
                               </View>
                             </View>
                           </View>
                           <View>
                             <Text style={[globalStyles.profileHeaderText]}>Dealer Code : {data.dealer_code}</Text>
                           </View>
                         </View>
                           <TouchableOpacity
                             activeOpacity={0.9}
                             style={globalStyles.profileHeadings}>
                             <Text style={globalStyles.profileHeadingText}>E-Mail: </Text>
                             <Text style={globalStyles.profileIcon}>{data.email}</Text>
                           </TouchableOpacity>
                  
                           <TouchableOpacity
                             activeOpacity={0.9}
                             style={globalStyles.profileHeadings}>
                             <Text style={globalStyles.profileHeadingText}>Contact: </Text>
                             <Text style={globalStyles.profileIcon}>{data.contact}</Text>
                           </TouchableOpacity>
                    
                           <TouchableOpacity
                             activeOpacity={0.9}
                             style={globalStyles.profileHeadings}>
                             <Text style={globalStyles.profileHeadingText}>Alternate Contact: </Text>
                             <Text style={globalStyles.profileIcon}>{data.aleternate_mobile}</Text>
                           </TouchableOpacity>
                 
                           <TouchableOpacity
                             activeOpacity={0.9}
                             style={globalStyles.profileHeadings}>
                             <Text style={globalStyles.profileHeadingText}>Date of Birth: </Text>
                             <Text style={globalStyles.profileIcon}>{data.dob}</Text>
                           </TouchableOpacity>
                     
                           <TouchableOpacity
                             activeOpacity={0.9}
                             style={globalStyles.profileHeadings}>
                             <Text style={globalStyles.profileHeadingText}>PAN: </Text>
                             <Text style={globalStyles.profileIcon}>{data.pancard}</Text>
                           </TouchableOpacity>
                         
                           <TouchableOpacity
                             activeOpacity={0.9}
                             style={[globalStyles.profileHeadings,{borderBottomWidth:0}]}>
                             <Text style={globalStyles.profileHeadingText}>Adhaar Card: </Text>
                             <Text style={globalStyles.profileIcon}>{data.adharcard}</Text>
                           </TouchableOpacity>
                   </View>
                 </SafeAreaView>
        }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})