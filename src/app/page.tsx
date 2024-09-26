"use client"
import { Anchor, Button , Checkbox, Container, Group, Modal, Radio, Select, Space, Text, TextInput, Title} from "@mantine/core";
import { runningPlans } from "@components/libs/runningPlans";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  const [termAccepted, setTerm] = useState(false);
  return (
    <>
      <Container size="500px" >

        <Title fs="italic" ta="center" >Register CMU Marathon</Title>
          
        <Space h="lg"/>
        
        <Group grow>
          
          <TextInput 
            label="First Name"
            placeholder="Input First Name"
          />
          
          <TextInput 
            label="Last Name"
            placeholder="Input Last Name"
          />
        
        </Group>  

        <Space h="lg"/>

        <Select
          label="Running Plan : "
          //data={["plan1","plan2"]}
          data={runningPlans}
          placeholder="Select Running Plan"
          searchable={true}
        />

        <Space h="lg"/>

        <Radio.Group
            name="Gender"
            label="Select your gender"
            withAsterisk
        >
          <Group>
            <Radio
              labelPosition="right"
              value="male"
              label="male"
              color="blue"
            />
            <Radio
              labelPosition="right"
              value="female"
              label="female"
              color="pink"
            />               
          </Group>
          
        </Radio.Group>
        

        <Modal opened={opened} onClose={close} title="Authentication" centered>
          <Text>
          กฏข้อแรกก็คือ ห้ามทิ้ง
          ข้อที่สองก็คือห้ามทิ้ง โกรธมากเลยถ้าเธอมาทิ้ง
          ไม่ใช่ถังขยะ ฉันไม่ใช่ถังขยะ
          แล้วข้อที่สามก็ยังห้ามทิ้ง ยันข้อเก้าก็ยังห้ามทิ้ง
          ไม่ได้แกล้งเนี่ยพูดจริง ๆ ฉันไม่ได้แกล้งหลอก
          ฉันไม่ใช่ผีจะมาหลอกเธอได้ไง
          </Text>
          <Button onClick={close}>Confirm</Button>
        </Modal>
        
        
        <Space h="lg"/>

        <Group>
          <Checkbox
            checked={termAccepted}
            onChange={(event) => setTerm(!termAccepted)}
          />
          <Text>I accept <Anchor variant="gradient" gradient={{ from: 'pink', to: 'yellow' }} fw={500} fz="lg" onClick={open} >terms and conditions</Anchor></Text>            
        </Group>

        <Group grow>
          <Button  disabled={!termAccepted}
            mt="sm" variant="gradient"
            gradient={{ from: 'yellow', to: 'green', deg: 98 }}>
              Register
          </Button>
        </Group>
      </Container>
    </> 
    
  );
 
}
