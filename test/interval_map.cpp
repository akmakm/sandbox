#include <iostream>
#include <map>
#include <iterator>
#define ALKA_COUT
template<typename K, typename V>
class interval_map {
	using _MyContainer = std::map<K, V>;
	using iterator = typename _MyContainer::iterator;
	using const_iterator = typename _MyContainer::const_iterator;
	friend void IntervalMapTest();
	V m_valBegin;
	_MyContainer m_map;
public:
	// constructor associates whole range of K with val
	interval_map(V const& val)
	: m_valBegin(val)
	{
		std::cout << "interval_map(V const& val)" << std::endl;
	}

	// Assign value val to interval [keyBegin, keyEnd).
	// Overwrite previous values in this interval.
	// Conforming to the C++ Standard Library conventions, the interval
	// includes keyBegin, but excludes keyEnd.
	// If !( keyBegin < keyEnd ), this designates an empty interval,
	// and assign must do nothing.
	void assign( K const& keyBegin, K const& keyEnd, V const& val ) {
		if ( !(keyBegin < keyEnd) ) //assign must do nothing.
			return;

		auto it = m_map.lower_bound(keyBegin), it_back = it;
		V copy_valBegin = m_valBegin;
		V&& oldVal = std::move(copy_valBegin); 

		if (m_map.empty()) {
			if (!(oldVal == val)) 
				it = ++(m_map.insert_or_assign(it, keyBegin, val));
		} else if (it != m_map.begin()) {
			it_back--; // Look at previous key if there is one
			if (!(it_back->second == val))
				it = ++ (m_map.insert_or_assign(it, keyBegin, val));
			else
				oldVal = it_back->second;
		} else if (!(oldVal == val))
			it = ++(m_map.insert_or_assign(it, keyBegin, val));

		while ((it != m_map.end()) && (! (keyEnd < it->first))) {
			std::swap(oldVal, it->second);
			it = m_map.erase(it);
		}

		if (oldVal == val)
			return;
		else if (it == m_map.end() || keyEnd < it->first) 
			m_map.insert_or_assign(it, keyEnd, oldVal);
	}

	// look-up of the value associated with key
	V const& operator[]( K const& key ) const {
		auto it=m_map.upper_bound(key);
		if(it==m_map.begin()) {
			return m_valBegin;
		} else {
			return (--it)->second;
		}
	}

	// returns an iterator to the beginning
	auto begin() {
		auto it = m_map.upper_bound(m_valBegin);
		if (it == m_map.begin()) {
			return it;
		}
		else {
			return m_map.begin();
		}
	}

	// returns an iterator to the end
	auto end() {
		auto it = m_map.lower_bound(m_valBegin);
		if (it == m_map.end()) {
			return it;
		}
		else {
			return m_map.end();
		}
	}

	auto insert_or_assign(K&& k, V&& obj) {
		return m_map.insert_or_assign(k, obj);

	}
};

// Many solutions we receive are incorrect. Consider using a randomized test
// to discover the cases that your implementation does not handle correctly.
// We recommend to implement a test function that tests the functionality of
// the interval_map, for example using a map of int intervals to char.