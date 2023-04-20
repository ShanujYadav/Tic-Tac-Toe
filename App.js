import { StatusBar } from 'expo-status-bar';
import { SafeAreaView ,StyleSheet, Text, View,Pressable ,Image, Alert} from 'react-native';
import { useEffect, useState } from 'react';
import cross from './assets/img/cross.png'
import replay from './assets/img/replay.png'
import zero from './assets/img/zero.png'


export default function App() {
  const[active_player,setActive_player]=useState('X')
  const[mark,setMark]=useState([
    null,null,null,
    null,null,null,
    null,null,null
  ])
  const markPosition=(position)=>{
      if(!mark[position]){
        let temp=[...mark]
        temp[position]=active_player
        setMark(temp)
        if(active_player === 'X'){
          setActive_player('O')
        }else{
          setActive_player('X')
        }
      }
  }
const reset=()=>{
setMark([
  null,null,null,
  null,null,null,
  null,null,null
])
}

const calculateWinner=(squares)=>{
const lines=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,1,2],
  [0,4,8],
  [2,4,6]
];
for(let i=0; i<lines.length;i++){
  const [a,b,c]=lines[i];
  if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
    return squares[a];
  }
}
return null;
} 

useEffect(()=>{
  const winner=calculateWinner(mark);
  if(winner === 'X'){
    alert('Player X won..')
    reset()
  }
  else if(winner === 'O'){
    alert('Player O won..')
    reset()
  }
},[mark])
  return (
    <SafeAreaView  style={styles.container}>
      <View style={[styles.playerInfo,{backgroundColor:active_player==='X'? '#cce6ff':'#ffb3b3'}]}>
        <Text style={styles.playerText}>Player {active_player}'s Turn</Text>
      </View>

      <View style={styles.mainContainer}>
        <Pressable style={styles.cell} onPress={()=>markPosition(0)}>
          {mark[0] =='X' && <Image source={cross} style={styles.icon}/>}
          {mark[0] =='O' && <Image source={zero} style={styles.icon}/>}
        </Pressable>
        <Pressable style={styles.cell} onPress={()=>markPosition(1)}>
          {mark[1] =='X' && <Image source={cross} style={styles.icon}/>}
          {mark[1] =='O' && <Image source={zero} style={styles.icon}/>}
        </Pressable>
        <Pressable style={styles.cell} onPress={()=>markPosition(2)}>
          {mark[2] =='X' && <Image source={cross} style={styles.icon}/>}
          {mark[2] =='O' && <Image source={zero} style={styles.icon}/>}
        </Pressable>
        <Pressable style={styles.cell} onPress={()=>markPosition(3)}>
          {mark[3] =='X' && <Image source={cross} style={styles.icon}/>}
          {mark[3] =='O' && <Image source={zero} style={styles.icon}/>}
        </Pressable>
        <Pressable style={styles.cell} onPress={()=>markPosition(4)}>
          {mark[4] =='X' && <Image source={cross} style={styles.icon}/>}
          {mark[4] =='O' && <Image source={zero} style={styles.icon}/>}
        </Pressable>
        <Pressable style={styles.cell} onPress={()=>markPosition(5)}>
          {mark[5] =='X' && <Image source={cross} style={styles.icon}/>}
          {mark[5] =='O' && <Image source={zero} style={styles.icon}/>}
        </Pressable>
        <Pressable style={styles.cell} onPress={()=>markPosition(6)}>
          {mark[6] =='X' && <Image source={cross} style={styles.icon}/>}
          {mark[6] =='O' && <Image source={zero} style={styles.icon}/>}
        </Pressable>
        <Pressable style={styles.cell} onPress={()=>markPosition(7)}>
          {mark[7] =='X' && <Image source={cross} style={styles.icon}/>}
          {mark[7] =='O' && <Image source={zero} style={styles.icon}/>}
        </Pressable>
        <Pressable style={styles.cell} onPress={()=>markPosition(8)}>
          {mark[8] =='X' && <Image source={cross} style={styles.icon}/>}
          {mark[8] =='O' && <Image source={zero} style={styles.icon}/>}
        </Pressable>
      </View>
      <View style={styles.resetView}>
        <Pressable onPress={()=>reset()} style={styles.resetBtn}>
          <Image source={replay} style={styles.resetImg}/>
          </Pressable>
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  playerInfo:{
    marginHorizontal:20,
    marginVertical:30,
    marginTop:80,
    height:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  playerText:{
    fontSize:25,
    fontWeight:'bold',
    letterSpacing:1.2,
  },
  mainContainer:{
    marginVertical:30,
    flexDirection:'row',
    justifyContent:'center',
    flexWrap:'wrap'
  },
  cell:{
    width:100,
    height:100,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'center',
    borderWidth:2,
    borderColor: '#b3d9ff',
    backgroundColor: '#fff'
    },
     icon:{
      width:62,
      height:62,
     },
     resetView:{
      marginHorizontal:20,
      alignItems:'flex-end',
    marginTop:140
     },
     resetBtn:{

     },
     resetImg:{
      width:60,
      height:60
     }
  })