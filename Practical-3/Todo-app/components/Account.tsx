// import { useState, useEffect } from 'react'
// import { supabase } from '../lib/supabase'
// import { StyleSheet, View, Alert } from 'react-native'
// import { Button, Input } from '@rneui/themed'
// import { Session } from '@supabase/supabase-js'

// export default function Account({ session }: { session: Session }) {
//   const [loading, setLoading] = useState(true)
//   const [username, setUsername] = useState('')
//   const [website, setWebsite] = useState('')
//   const [avatarUrl, setAvatarUrl] = useState('')

//   useEffect(() => {
//     if (session) getProfile()
//   }, [session])

//   async function getProfile() {
//     try {
//       setLoading(true)
//       if (!session?.user) throw new Error('No user on the session!')

//       const { data, error, status } = await supabase
//         .from('profiles')
//         .select(`username, website, avatar_url`)
//         .eq('id', session?.user.id)
//         .single()
//       if (error && status !== 406) {
//         throw error
//       }

//       if (data) {
//         setUsername(data.username)
//         setWebsite(data.website)
//         setAvatarUrl(data.avatar_url)
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         Alert.alert(error.message)
//       }
//     } finally {
//       setLoading(false)
//     }
//   }

//   async function updateProfile({
//     username,
//     website,
//     avatar_url,
//   }: {
//     username: string
//     website: string
//     avatar_url: string
//   }) {
//     try {
//       setLoading(true)
//       if (!session?.user) throw new Error('No user on the session!')

//       const updates = {
//         id: session?.user.id,
//         username,
//         website,
//         avatar_url,
//         updated_at: new Date(),
//       }

//       const { error } = await supabase.from('profiles').upsert(updates)

//       if (error) {
//         throw error
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         Alert.alert(error.message)
//       }
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <View style={[styles.verticallySpaced, styles.mt20]}>
//         <Input label="Email" value={session?.user?.email} disabled />
//       </View>
//       <View style={styles.verticallySpaced}>
//         <Input label="Username" value={username || ''} onChangeText={(text) => setUsername(text)} />
//       </View>
//       <View style={styles.verticallySpaced}>
//         <Input label="Website" value={website || ''} onChangeText={(text) => setWebsite(text)} />
//       </View>

//       <View style={[styles.verticallySpaced, styles.mt20]}>
//         <Button
//           title={loading ? 'Loading ...' : 'Update'}
//           onPress={() => updateProfile({ username, website, avatar_url: avatarUrl })}
//           disabled={loading}
//         />
//       </View>

//       <View style={styles.verticallySpaced}>
//         <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 40,
//     padding: 12,
//   },
//   verticallySpaced: {
//     paddingTop: 4,
//     paddingBottom: 4,
//     alignSelf: 'stretch',
//   },
//   mt20: {
//     marginTop: 20,
//   },
// })

import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { StyleSheet, View, Alert, FlatList, Text } from 'react-native'
import { Button, Input } from '@rneui/themed'
import { Session } from '@supabase/supabase-js'

export default function Account({ session }: { session: Session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState('')
  const [website, setWebsite] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [todos, setTodos] = useState<string[]>([])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    if (session) getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      if (!session?.user) throw new Error('No user on the session!')

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', session?.user.id)
        .single()
      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string
    website: string
    avatar_url: string
  }) {
    try {
      setLoading(true)
      if (!session?.user) throw new Error('No user on the session!')

      const updates = {
        id: session?.user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      const { error } = await supabase.from('profiles').upsert(updates)

      if (error) {
        throw error
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  function addTodo() {
    if (newTodo.trim() === '') {
      Alert.alert('Error', 'To-do cannot be empty')
      return
    }
    setTodos([...todos, newTodo])
    setNewTodo('')
  }

  function deleteTodo(index: number) {
    const updatedTodos = todos.filter((_, i) => i !== index)
    setTodos(updatedTodos)
  }

  return (
    <View style={styles.container}>
      {/* <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input label="Email" value={session?.user?.email} disabled />
      </View>
      <View style={styles.verticallySpaced}>
        <Input label="Username" value={username || ''} onChangeText={(text) => setUsername(text)} />
      </View>
      <View style={styles.verticallySpaced}>
        <Input label="Website" value={website || ''} onChangeText={(text) => setWebsite(text)} />
      </View>

      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title={loading ? 'Loading ...' : 'Update'}
          onPress={() => updateProfile({ username, website, avatar_url: avatarUrl })}
          disabled={loading}
        />
      </View>

      <View style={styles.verticallySpaced}>
        <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
      </View> */}

      {/* To-Do List Section */}
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Text style={styles.heading}>To-Do List</Text>
        <Input
          placeholder="Add a new to-do"
          value={newTodo}
          onChangeText={(text) => setNewTodo(text)}
        />
        <Button title="Add To-Do" onPress={addTodo} />
        <FlatList
          data={todos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View>
              <View style={styles.todoItem}>
                <Text>{item}</Text>
                <Button title="Delete" onPress={() => deleteTodo(index)} />
              </View>
            
              <View style={styles.verticallySpaced}>
                <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
              </View>
            </View>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
})