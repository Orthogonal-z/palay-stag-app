// Select Time Dropdown

import DropDownPicker from 'react-native-dropdown-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <FontAwesome5 name="clock" size={24} color="black" />
        <Text style={{ fontSize: 16 }}>Select Time</Text>
    </View>

    <View>
        <DropDownPicker
            style={{ backgroundColor: COLORS.small__btn, width: 150, borderWidth: 0, borderRadius: SIZE.borderRadius, paddingLeft: 23 }}
            open={open2}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            defaultValue={value2}
            value={value2}
            items={items2}
            setOpen={setOpen2}
            setValue={setValue2}
            setItems={setItems2}
        />
    </View>
</View>

const [open, setOpen] = useState(false);
const [value, setValue] = useState('none');
const [items, setItems] = useState([
    { label: 'Select', value: 'none' },
    { label: '1', value: 'one' },
    { label: '2', value: 'two' },
    { label: '3', value: 'three' },
    { label: '4', value: 'four' }

]);

const [open2, setOpen2] = useState(false);
const [value2, setValue2] = useState('9-11');
const [items2, setItems2] = useState([
    { label: '9 AM - 11 AM', value: '9-11' },
    { label: '11 AM - 2 PM', value: '11-1' }
]);