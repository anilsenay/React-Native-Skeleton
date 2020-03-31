import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Animated } from 'react-native';
import FadeInView from './FadeInView.js'

export default function Skeleton(props) {

  const [isHidden, setHidden] = useState(false)

  const hideSkeleton = () => {
        setHidden(true)
  }

  let skeletonStyle = {}

  props.width ? skeletonStyle.width = props.width : skeletonStyle.width = 0
  props.height ? skeletonStyle.height = props.height : skeletonStyle.height = 0
  props.shape === "circle" ? (skeletonStyle.borderRadius = 50) : (skeletonStyle.borderRadius = 0);
  props.style ? skeletonStyle = {...skeletonStyle, ...props.style} : void(0)
  props.backgroundColor ? skeletonStyle.backgroundColor = props.backgroundColor : skeletonStyle.backgroundColor = "white"

  if(props.duration)
      setTimeout(hideSkeleton, props.duration)

  let skeletonChildren = []
  if(props.children !== undefined && props.children.length !== undefined){
      for(let i = 0; i < props.children.length; i++){
          if(props.children[i].type === Skeleton)
              skeletonChildren.push(props.children[i])
      }
  }

  if(props.children !== undefined && props.children.length === undefined){
    if(props.children.type === Skeleton)
        skeletonChildren.push(props.children)
  }




  return (
    <View style={styles.container}>
      {
        props.loaded || isHidden ? props.children : 
        <FadeInView>
          <View style={[styles.skeletonBox, skeletonStyle]}>
            {skeletonChildren.length > 0 ? skeletonChildren : null}
          </View>
        </FadeInView>
      }
    </View>
    
  );
}

const styles = StyleSheet.create({
  skeletonBox: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#000',
    textAlign: 'center',
  }
});
