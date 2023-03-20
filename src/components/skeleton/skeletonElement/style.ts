import styled from "styled-components";

export const Container = styled.div<{type: string}>`
  background: #ddd;
  ${props=>{
   if(props.type === 'title'){
       return 'height: 21px;border-radius: 4px; margin-bottom: 17px;'
   }
   if(props.type === 'stats'){
       return 'width: 38px;height: 37px; border-radius: 50%;'
   }
    if(props.type === 'stats-name'){
      return 'width: 33px;height: 14px; border-radius: 4px;'
    }
   if(props.type === 'feature'){
       return 'width: 57px; height: 14px; border-radius: 11px;'
   }
    if(props.type === 'image'){
      return 'width: 65%; height: 100%;'
    }
  }}
`;