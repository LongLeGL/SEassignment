import React, {useState} from 'react';
import './ChatBox.css'
import EmployeeChatJson from '../data/employee_forChat.json'
import SearchIcon from '../img/search.svg'
import UserIcon from '../img/portrait.svg'


function ChatBox() {
    const [query, setQuery] = useState('');
    
    const [selectedProfile, selectProfile] = useState(EmployeeChatJson[0]);
    const handleProfileSelect = (SelectedId) => {
        EmployeeChatJson.filter(user => {
            if (user.id === SelectedId){
                selectProfile(user);
            }
            return null;
        })
    };

    const [BufferedChatMessage, SetBufferedChatMessage] = useState("");
    const handleMessageSend = () => {
        selectedProfile.chat_log.push(BufferedChatMessage);
        document.getElementById('sidechatbarinput').value="";
        SetBufferedChatMessage("")
    }

    return (  
        <div className='ChatTab'>
            <div className='ChatSearchSection'>
                <span>Trò chuyện</span>
                <div className='ChatSearchBar'>
                    <img src={SearchIcon} alt='icon'/>
                    <input 
                        placeholder="Tìm kiếm" 
                        onChange={event => setQuery(event.target.value)}
                    />
                </div>
                <div className='ChatSearchResult'>
                    {
                        EmployeeChatJson.filter(user => {
                            if (query === "") {
                                return user;
                            } else if (
                                        user.full_name.toLowerCase().includes(query.toLowerCase()) ||
                                        user.id.toLowerCase().includes(query.toLowerCase())
                                      ) {
                                //returns filtered array
                                return user;
                            }
                            return null;
                        }).map((user, index) => (
                            <div 
                                className='UserChatProfile' key={index}
                                onClick={()=>handleProfileSelect(user.id)}
                            >
                                <img className='ChatProfilePic' src={UserIcon} alt='ChatProfileIcon'/>
                                <div className='ChatProfileInfo'>
                                    <div>{user.full_name}</div>
                                    <div>{user.id}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='CurrentChatSection'>
                <div className='SelectedChatProfile'>
                    <img className='ChatProfilePic' src={UserIcon} alt='ChatProfileIcon'/>
                    <div className='SelectedProfileInfo'>
                        <div>{selectedProfile.full_name}</div>
                        <div>{selectedProfile.id}</div>
                    </div>
                </div>
                <div className='SelectedChatLog'>
                    <div className='SelectedChatLog messages'>
                        {selectedProfile.chat_log.map((msg, index) => (
                            <div className='SelectedChatLog message' key={index}>
                                {msg}
                            </div>
                        ))
                        }
                    </div>
                    <div className='SelectedChatLog ChatBar'>
                        <input 
                        id='sidechatbarinput'
                        placeholder="Nhắn tin..." 
                        onChange={event => SetBufferedChatMessage(event.target.value)}
                        />
                        <button onClick={handleMessageSend}>Gửi</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatBox;